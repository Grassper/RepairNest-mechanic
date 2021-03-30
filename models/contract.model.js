class Contract {
  constructor(
    id,
    clientId,
    clientName,
    clientImageUrl,
    mechanicId,
    mechanicName,
    mechanicImageUrl,
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
    this.mechanicId = mechanicId;
    this.mechanicName = mechanicName;
    this.mechanicImageUrl = mechanicImageUrl;
    this.fare = fare;
    this.distance = distance;
    this.repairType = repairType;
    this.location = location;
    this.problem = problem;
    this.orderStatus = orderStatus; // completed or cancelled
  }
}

export default Contract;
