import { client } from './src/utils/db.js';
import { User } from './src/models/user.js';

await client.sync({
  force: true,
});
