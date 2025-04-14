import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Animated } from "react-native";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const AnimatedContainer = styled(
  Animated.createAnimatedComponent(TouchableOpacity)
)<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 16px 24px;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, variant = "primary" }) =>
    variant === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`;

export const Icon = styled.View<ButtonProps>`
  ${({ theme, variant = "primary" }) => css`
    color: ${variant === "primary"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_100};
    margin-right: 12px;
  `}
`;
