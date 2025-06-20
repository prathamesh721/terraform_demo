import { render } from '@testing-library/react';

import TerraformUiGraphRenderer from './graph-renderer';

describe('TerraformUiGraphRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerraformUiGraphRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
