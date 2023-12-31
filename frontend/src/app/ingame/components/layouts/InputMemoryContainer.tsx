'use client';

import { EditIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
  isDisabled?: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onClick: () => void;
};

export function InputMemoryContainer({
  isDisabled = false,
  inputRef,
  onClick,
}: Props) {
  const [input, setInput] = useState('');

  return (
    <Center height={100} bgColor="#78CDFD" p={4}>
      <Flex gap={5}>
        <InputGroup width={500}>
          <InputLeftElement>
            <EditIcon />
          </InputLeftElement>
          <Input
            bgColor="whiteAlpha.900"
            placeholder="この写真へ思い出の一言"
            maxLength={20}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            isDisabled={isDisabled}
          />
        </InputGroup>

        <Button
          rightIcon={<EmailIcon />}
          onClick={onClick}
          isDisabled={isDisabled || input === ''}
        >
          送る
        </Button>
      </Flex>
    </Center>
  );
}
