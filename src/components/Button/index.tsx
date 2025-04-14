import { Animated, TouchableOpacityProps } from "react-native";
import { AnimatedContainer, Icon, Title } from "./style";

import { Icon as PhosporIcon } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useEffect, useRef } from "react";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  icon?: PhosporIcon;
  title: string;
}

export const Button = ({
  variant = "primary",
  title,
  icon: IconComponent,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const animation = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange:
      variant === "primary"
        ? [theme.COLORS.GRAY_200, theme.COLORS.GRAY_100]
        : [theme.COLORS.WHITE, theme.COLORS.GRAY_600],
  });

  const borderColor =
    variant === "primary" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100;

  return (
    <AnimatedContainer
      {...props}
      style={{ backgroundColor, borderWidth: 1, borderColor }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      {IconComponent && (
        <Icon as={IconComponent} variant={variant} size={theme.FONT_SIZE.LG} />
      )}
      <Title variant={variant}>{title}</Title>
    </AnimatedContainer>
  );
};
