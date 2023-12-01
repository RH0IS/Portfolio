// backend_sanity/schemas/schema.js

import createSchema from 'part:@sanity/base/schema-creator';

//import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import testimonials from './testimonials';

// Import your custom schema types here, if any

const schema = createSchema({
    // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testimonials
  ]),
});

export default schema;
