import { render } from '@testing-library/react-native';
import * as React from 'react';
import { ThemedView } from '../ThemedView';

it(`renders correctly`, () => {
    const tree = render(<ThemedView />);

    expect(tree).toMatchSnapshot();
});