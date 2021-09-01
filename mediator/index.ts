/*
 * Mediator pattern.
 */

class Chatroom {
  participants: Participant[] = [];

  constructor() {}

  registerParticipant(participant: Participant): void {
    this.participants.push(participant);
  }

  sendAll(msg: string, sender: Participant): void {
    this.participants.forEach((participant) => {
      participant.receive(msg, sender);
    });
  }
}

class Participant {
  name: string;
  chatroom: Chatroom;

  constructor(name: string, chatroom: Chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  sendAll(msg: string): void {
    this.chatroom.sendAll(msg, this);
  }

  receive(msg: string, sender: Participant): void {
    console.log(`${this.name} received message from ${sender.name} : ` + msg);
  }
}

let chatroom = new Chatroom();

let akshay = new Participant('Akshay', chatroom);
let rohan = new Participant('Rohan', chatroom);
let raj = new Participant('Raj', chatroom);
chatroom.registerParticipant(akshay);
chatroom.registerParticipant(rohan);
chatroom.registerParticipant(raj);
akshay.sendAll('Hi');
