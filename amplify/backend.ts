import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
//Tags
import { Tags } from 'aws-cdk-lib';

const backend = defineBackend({
  auth,
  data,
});

const tags = Tags.of(backend.stack);
// add a new tag
// Example tags.add('my-key', 'my-value');
   tags.add('contact', 'Emmanuel Sedas');
   tags.add('dept', 'DTS');
   tags.add('elcid', 'itclarch');
   tags.add('env', 'test');
   tags.add('app', 'EvalAmpllify');
   tags.add('security', '0');
   // remove tags
//tags.remove('my-key');