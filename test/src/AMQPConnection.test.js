'use strict';

// // ------- Imports -------------------------------------------------------------

const test = require('ava');
// const chai = require('chai');
// const sinon = require('sinon');
// const amqplib = require('amqplib');

// const AMQPConnection = require('../../src/AMQPConnection');

// // ------- Init ----------------------------------------------------------------

// chai.should();

// // ------- Tests ---------------------------------------------------------------

/**
 * Connection class interface
 */
test.skip('AMQPConnection interface', () => {
  const connection = new AMQPConnection({ user: 'test' });
});

// /**
//  * Connection class interface
//  */
// test.skip('AMQPConnection.connect() works', async () => {
//   sinon.stub(amqplib, 'connect').callsFake(() => {
//     return true;
//   });

//   const connection = new AMQPConnection({ amqplib });
//   const result = await connection.connect();
//   console.dir(result, { colors: true, showHidden: true });
// });


// // ------- End -----------------------------------------------------------------
