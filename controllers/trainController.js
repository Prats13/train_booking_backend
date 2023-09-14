const Train = require('../models/Train');

exports.createTrain = async (req, res) => {
  try {
    const { train_name, source, destination, seat_capacity, arrival_time_at_source, arrival_time_at_destination } = req.body;
    const train = new Train({
      train_name,
      source,
      destination,
      seat_capacity,
      arrival_time_at_source,
      arrival_time_at_destination,
    });
    await train.save();
    res.status(201).json({ message: 'Train added successfully', train_id: train.train_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getTrainAvailability = async (req, res) => {
  try {
    const { source, destination } = req.query;
    const trains = await Train.find({ source, destination });
    res.status(200).json(trains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTrain = async (req, res) => {
  try {
    const { train_id } = req.params;
    const {
      train_name,
      source,
      destination,
      seat_capacity,
      arrival_time_at_source,
      arrival_time_at_destination,
    } = req.body;

    const train = await Train.findOne({ where: { train_id } });

    if (!train) {
      return res.status(404).json({ status: 'Train not found' });
    }

    train.train_name = train_name;
    train.source = source;
    train.destination = destination;
    train.seat_capacity = seat_capacity;
    train.arrival_time_at_source = arrival_time_at_source;
    train.arrival_time_at_destination = arrival_time_at_destination;

    await train.save();

    res.status(200).json({ status: 'Train details updated successfully', train });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
