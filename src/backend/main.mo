import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";

actor {
  type BookingSubmission = {
    name : Text;
    email : Text;
    numParticipants : Nat;
    preferredTime : Text;
  };

  let demoClassBookings = Map.empty<Nat, BookingSubmission>();
  var currentId = 0;

  public query func getAllSubmissions() : async [BookingSubmission] {
    demoClassBookings.values().toArray();
  };
};
