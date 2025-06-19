import { render } from '@testing-library/react';

import TerraformUiState from './state';

describe('TerraformUiState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerraformUiState />);
    expect(baseElement).toBeTruthy();
  });
});
