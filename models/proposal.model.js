class Proposal {
  constructor(
    id,
    clientId,
    clientName,
    clientImageUrl,
    fare,
    distance,
    repairType,
    location,
    problem,
    orderStatus
  ) {
    this.id = id;
    this.clientId = clientId;
    this.clientName = clientName;
    this.clientImageUrl = clientImageUrl;
    this.fare = fare;
    this.distance = distance;
    this.repairType = repairType;
    this.location = location;
    this.problem = problem;
    this.orderStatus = orderStatus;
  }
}

export default Proposal;
