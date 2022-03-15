import { CloseIcon } from '@chakra-ui/icons';
import { Badge, Box } from '@chakra-ui/react';
import React from 'react';

const UserBadgeItem = ({user, handleFunction}) => {
  return (
        <Badge px= {2} py = {2} borderRadius = "lg" m ={1} mb = {2} variant = "solid" fontSize={12} backgroundColor="mediumpurple" color = "white" cursor = "pointer" onClick= {handleFunction}>
        {user.name}
        <CloseIcon pl = {1}/>

        </Badge>
  )
}

export default UserBadgeItem;
