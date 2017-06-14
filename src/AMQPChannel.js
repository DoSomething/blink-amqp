'use strict';

class AMQPChannel {
  constructor(connector) {
    this.connector = connector;
    this.channel = false;
  }

  async connect() {
    const connection = await this.connector.getConnection();
    this.channel = connection.createChannel();
  }

  async assertExchange(name) {
    let respons;
    try {
      response = await this.channel.assertExchange(name, 'topic');
    } catch (error) {
      // Wrap HTTP exceptions in meaningful response.
      throw new Error(`Exchange.setup(): Exchange assertion failed for "${name}": ${error.message}`);
    }

    // Rabbit echoes exchange name on successful response.
    return response.exchange === name;
  }

  // async setupQueue(queue) {
  //   const assertResponse = await this.channel.assertQueue(queue.name);

  //   // Rabbit echoes queue name on successful result.
  //   if (assertResponse.queue !== queue.name) {
  //     throw new Error(`Exchange.setup(): Queue assertion failed for "${queue.name}"`);
  //   }

  //   // TODO: bind queue to exchange.
  //   const bindPromises = queue.routes.map(async (route) => {
  //     await this.channel.bindQueue(queue.name, this.name, route);
  //     // Server returns nothing on bind operation,
  //     // so we just assume it worked
  //     return true;
  //   });

  //   // Resolves to true after all promises are fulfilled.
  //   await Promise.all(bindPromises);
  //   return true;
  // }

  // publish(routingKey, message) {
  //   // TODO: get routing key from message
  //   const options = {
  //     // The message will be returned if it is not routed to a queue.
  //     mandatory: true,
  //     // Always persistent.
  //     persistent: true,
  //   };

  //   // Todo: save additional message metadata

  //   // TODO: handle drain and returned messages.
  //   // See http://www.squaremobius.net/amqp.node/channel_api.html#channel-events
  //   // eslint-disable-next-line no-unused-vars
  //   const result = this.channel.publish(
  //     this.name,
  //     routingKey,
  //     new Buffer(message.toString(), 'utf-8'),
  //     options
  //   );

  //   // Always true.
  //   return true;
  // }

  // /**
  //  * Use carefully. TODO: document
  //  */
  // limitConsumerPrefetchCount(count) {
  //   this.channel.prefetch(count);
  // }

}

module.exports = AMQPChannel;
