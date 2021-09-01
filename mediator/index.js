var Chatroom = /** @class */ (function () {
    function Chatroom() {
        this.participants = [];
    }
    Chatroom.prototype.registerParticipant = function (participant) {
        this.participants.push(participant);
    };
    Chatroom.prototype.sendAll = function (msg, sender) {
        this.participants.forEach(function (participant) {
            participant.receive(msg, sender);
        });
    };
    return Chatroom;
}());
var Participant = /** @class */ (function () {
    function Participant(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }
    Participant.prototype.sendAll = function (msg) {
        this.chatroom.sendAll(msg, this);
    };
    Participant.prototype.receive = function (msg, sender) {
        console.log(this.name + " received message from " + sender.name + " : " + msg);
    };
    return Participant;
}());
var chatroom = new Chatroom();
var akshay = new Participant('Akshay', chatroom);
var rohan = new Participant('Rohan', chatroom);
var raj = new Participant('Raj', chatroom);
chatroom.registerParticipant(akshay);
chatroom.registerParticipant(rohan);
chatroom.registerParticipant(raj);
akshay.sendAll('Hi');
