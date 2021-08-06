/**
 * Testing a route that receives a parameter, like "/send-email/test@test.com"
 */
 
import { Route, MemoryRouter } from 'react-router-dom';

render(
  <MemoryRouter initialEntries={['/send-email/test@test.com']}>
    <Route path="/send-email/:email">
      <SendEmail />
    </Route>
  </MemoryRouter>
);
