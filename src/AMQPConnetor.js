'use strict';

const amqpuri = require('amqpuri');
const defaultAmqp = require('amqplib');

class AMQPConnetor {
  constructor({ amqplib = defaultAmqp , uri = "" }) {
    this.uri = uri;
    this.amqplib = amqplib;
    this.connection = false;
  }

  static fromConnectionString({ amqplib, username, password, hostname, port, vhost }) {
    const uri = amqpuri.format({
      username,
      password,
      hostname,
      port,
      vhost,
    });
    return new AMQPConnetor(amqplib, name, uri);
  }

  /**
   * Establish connection to server immediately.
   * @return true
   */
  async connect() {
    this.connection = await this.amqplib.connect(this.uri);
  }
}

module.exports = AMQPConnetor;
