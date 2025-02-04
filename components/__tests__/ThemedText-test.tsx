import { render } from '@testing-library/react-native';
import { ThemedText } from '../ThemedText';

jest.mock('@/hooks/useThemeColor');

describe('<ThemedText />', () => {
  test('renders with type "default"', () => {
    const { getByText } = render(<ThemedText>Default Text</ThemedText>);
    const element = getByText('Default Text');
    expect(element).toHaveStyle({ fontSize: 16, lineHeight: 24 });
  });

  test('renders with type "default"', () => {
    const { getByText } = render(<ThemedText type="default">Default Text</ThemedText>);
    const element = getByText('Default Text');
    expect(element).toHaveStyle({ fontSize: 16, lineHeight: 24 });
  });

  test('renders with type "title"', () => {
    const { getByText } = render(<ThemedText type="title">Title Text</ThemedText>);
    const element = getByText('Title Text');
    expect(element).toHaveStyle({ fontSize: 32, fontWeight: 'bold', lineHeight: 32 });
  });

  test('renders with type "subtitle"', () => {
    const { getByText } = render(<ThemedText type="subtitle">Subtitle Text</ThemedText>);
    const element = getByText('Subtitle Text');
    expect(element).toHaveStyle({ fontSize: 20, fontWeight: 'bold' });
  });

  test('renders with type "link"', () => {
    const { getByText } = render(<ThemedText type="link">Link Text</ThemedText>);
    const element = getByText('Link Text');
    expect(element).toHaveStyle({ lineHeight: 30, fontSize: 16, color: '#0a7ea4' });
  });

  test('renders with type "defaultSemiBold"', () => {
    const { getByText } = render(<ThemedText type="defaultSemiBold">Default SemiBold Text</ThemedText>);
    const element = getByText('Default SemiBold Text');
    expect(element).toHaveStyle({
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
    });
  });
});
