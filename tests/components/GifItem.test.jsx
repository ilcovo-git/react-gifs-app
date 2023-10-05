import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Evalua Componenet <GifItem />', () => { 

    const title = 'La imagen más bonita';
    const url   = 'https://postman';

    
    test('should be match prop title and url at <GifItem /> component with snapshot', () => { 
        
        const { container} = render(<GifItem title={ title} url={ url }/>);
        expect( container).toMatchSnapshot();
        
     })
 })