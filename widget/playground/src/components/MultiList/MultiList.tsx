import type { MultiListPropTypes } from './MultiList.types';

import {
  Checkbox,
  CloseIcon,
  Divider,
  IconButton,
  Image,
  NotFound,
  SearchIcon,
  SelectableCategoryList,
  TextField,
  Typography,
} from '@rango-dev/ui';
import React, { useState } from 'react';

import { useMetaStore } from '../../store/meta';
import { EmptyContainer, StyledButton } from '../SingleList/SingleList.styles';

import { selectDeselectHandler } from './MultiList.helper';
import {
  CheckList,
  HeaderContainer,
  IconWrapper,
  ItemDivider,
  SelectButton,
  StyledListItemButton,
} from './MultiList.styles';

export function MultiList(props: MultiListPropTypes) {
  const { defaultSelectedItems, list, icon, label, type, onChange } = props;
  const [category, setCategory] = useState<string>('ALL');
  const [searchValue, setSearchValue] = useState('');
  const [selectedItems, setSelectedItems] = useState(
    defaultSelectedItems || []
  );
  const { blockchains } = useMetaStore.use.meta();

  // Filter the list based on search input
  const filteredList = searchValue
    ? list.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : list;

  // Filter the list based on selected category
  const cotegoryList =
    category === 'ALL'
      ? filteredList
      : filteredList.filter((item) => item.networks.includes(category));

  // Handle item selection/unselection
  const handleChangeList = (item: string) => {
    const list = [...selectedItems];
    const updatedList = list.includes(item)
      ? list.filter((i) => i !== item)
      : [...list, item];
    setSelectedItems(updatedList);
  };

  // Select or deselect all items in the category list
  const handleAllSelectedClick = (type: 'select' | 'deselect') => () => {
    const cotegoryListTypes = cotegoryList.map((c) => c.name);
    if (type === 'select') {
      const newSelectedItems = Array.from(
        new Set([...selectedItems, ...cotegoryListTypes])
      );
      setSelectedItems(newSelectedItems);
    } else {
      const filteredCategories = selectedItems.filter(
        (item) => !cotegoryListTypes.includes(item)
      );
      setSelectedItems(filteredCategories);
    }
  };

  const handleConfirm = () => {
    onChange(selectedItems.length === list.length ? undefined : selectedItems);
  };

  // Mapping the items to their respective components
  const items = cotegoryList.map((item) => {
    const { logo, title, name } = item;
    return {
      start: <Image src={logo} size={16} type="circular" />,
      onClick: () => handleChangeList(name),
      end: <Checkbox checked={selectedItems.includes(name)} />,
      title: (
        <Typography variant="title" size="small">
          {title}
        </Typography>
      ),
      id: title,
    };
  });

  const resultsNotFound = !items.length && !!searchValue;
  const isAllCategorySelected = React.useMemo(
    () => selectDeselectHandler(selectedItems, cotegoryList),
    [selectedItems, cotegoryList]
  );
  return (
    <>
      <HeaderContainer>
        <div className="header">
          {icon}
          <Divider direction="horizontal" size={4} />
          <Typography size="medium" variant="body">
            {label}
          </Typography>
        </div>
        <Typography size="medium" variant="body">
          {`${selectedItems.length}/${list.length}`}
        </Typography>
      </HeaderContainer>
      <Divider size={20} />
      <SelectableCategoryList
        blockchains={blockchains}
        category={category}
        setCategory={setCategory}
      />
      <Divider size={20} />
      <TextField
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        variant="contained"
        placeholder={`Search ${type}`}
        prefix={
          <IconWrapper>
            <SearchIcon color="gray" />
          </IconWrapper>
        }
        suffix={
          <IconButton
            variant="ghost"
            onClick={() => setSearchValue('')}
            size="small">
            {!!searchValue.length && <CloseIcon color="gray" size={10} />}
          </IconButton>
        }
        style={{
          padding: 10,
          borderRadius: 25,
          alignItems: 'center',
        }}
      />
      <Divider size={12} />
      {resultsNotFound ? (
        <EmptyContainer>
          <NotFound
            title="No results found"
            description="Try using different keywords"
          />
        </EmptyContainer>
      ) : (
        <>
          <SelectButton
            onClick={
              isAllCategorySelected
                ? handleAllSelectedClick('deselect')
                : handleAllSelectedClick('select')
            }>
            <Typography variant="label" size="medium" color="neutral900">
              {isAllCategorySelected ? 'Deselect all' : 'Select all'}
            </Typography>
          </SelectButton>
          <Divider size={12} />
          <CheckList>
            {items.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <StyledListItemButton {...item} />
                  <ItemDivider />
                </React.Fragment>
              );
            })}
          </CheckList>
        </>
      )}
      <Divider size={32} />
      {!resultsNotFound && (
        <StyledButton
          type="primary"
          size="medium"
          variant="contained"
          onClick={handleConfirm}>
          Confirm
        </StyledButton>
      )}
    </>
  );
}