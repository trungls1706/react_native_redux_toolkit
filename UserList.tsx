import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

const UserList: FunctionComponent = () => {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  return (
    <>
      {screenState.loading && <Text>LOADING</Text>}
      {screenState.error && <Text>ERROR</Text>}
      {!screenState.loading && !screenState.error && <Text>DEFAULT</Text>}

    </>
  );
};

export default UserList;
