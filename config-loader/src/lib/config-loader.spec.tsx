import { render } from '@testing-library/react';

import TerraformUiConfigLoader from './config-loader';

describe('TerraformUiConfigLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerraformUiConfigLoader />);
    expect(baseElement).toBeTruthy();
  });
});
