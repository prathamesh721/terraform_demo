import { render } from '@testing-library/react';

import TerraformUiApiClient from './api-client';

describe('TerraformUiApiClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerraformUiApiClient />);
    expect(baseElement).toBeTruthy();
  });
});
