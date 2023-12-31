import { Button } from '@chakra-ui/react';
import type { ReactElement } from 'react';

type Props = {
  text: string;
  rightIcon: ReactElement;
  color: string;
  bgColor: string;
  borderWidth?: string;
  maxW?: string;
  height?: string;
  isDisabled: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export function OutlineButtonWithRightIcon({
  text,
  rightIcon,
  color,
  bgColor,
  borderWidth = '3px',
  maxW = '1000px',
  height,
  isDisabled,
  isLoading,
  onClick,
}: Props) {
  return (
    <Button
      w="full"
      h={height}
      size="lg"
      rightIcon={rightIcon}
      color={color}
      borderWidth={borderWidth}
      borderColor={color}
      borderRadius="2xl"
      variant="outline"
      backgroundColor={bgColor}
      maxW={maxW}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
