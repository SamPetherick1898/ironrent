import React from 'react'
import { Flex } from "@chakra-ui/react"
import Card from './Card'
import NoData from './NoData';

const ListaCasas = (props) => {
    const { data } = props
  return (
    <Flex flexWrap={"wrap"} justifyContent="center">
         {/* <Button colorScheme='blue' onClick={toggleShow}>Completado</Button>
      {show && (
        <Spinner color='yellow.500'/>
      )}
        */}
        {data.map((casa, index) => {
            return <Card key={index} info={casa}/>;
          })}
          {
            data.length === 0 && <NoData/>
          }
    </Flex>
  );
};

export default ListaCasas