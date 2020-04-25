import { EmailValidator } from '@angular/forms';

export interface User {
  id: number;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: EmailValidator;
  is_active: boolean;
}
