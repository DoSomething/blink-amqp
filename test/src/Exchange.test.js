'use strict';

// ------- Imports -------------------------------------------------------------

const amqplib = require('amqplib');
const test = require('ava');
const chai = require('chai');
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const AMQPChannel = require('../../src/AMQPChannel');
const AMQPConnetor = require('../../src/AMQPConnetor');
const Exchange = require('../../src/Exchange');

// ------- Init ----------------------------------------------------------------

chai.should();
chai.use(sinonChai);

test.beforeEach((t) => {
  t.context.channel = new AMQPChannel(new AMQPConnetor({}));
});

test.afterEach((t) => {
  t.context.channel = false;
});

// ------- Tests ---------------------------------------------------------------

/**
 * Connection class interface
 */
test('Exchange should create topic exchange named ThisIsExchangeName', async (t) => {
  const channel = t.context.channel;
  const name = 'ThisIsExchangeName';

  const assertExchangeStub = sinon.stub(channel, "assertExchange");
  const exchange = new Exchange({ channel, name });

  await exchange.declare();
  assertExchangeStub.should.have.been.calledOnce.and.calledWith(name);
});


// /**
//  * Exchange class interface
//  */
// test.skip('Exchange interface', () => {
//   const locals = require('../../config');
//   const testX = new Exchange(locals.amqp);
//   testX.should.have.respondTo('setup');
//   testX.should.have.respondTo('assertQueue');
// });

// *
//  * Exchange.setup(): Test RabbitMQ connection

// test.skip('Exchange.setup(): Test RabbitMQ connection', async () => {
//   const locals = require('../../config');
//   const testX = new Exchange(locals.amqp);
//   const connected = await testX.setup();
//   connected.should.be.true;
// });

// ------- End -----------------------------------------------------------------
