import Application from 'ed-errors-autotracking-bug/app';
import config from 'ed-errors-autotracking-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
