import { render } from '@testing-library/react';

import TerraformUiUiComponents from './ui-components';

describe('TerraformUiUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerraformUiUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
