const { Expert } = require("../models/expertM");
const { CountriesRegion } = require("../models/regionCountriesM");
const { Countries } = require("../models/countriesM");
const { States } = require("../models/statesM");
const { Cities } = require("../models/citiesM");
const { Claim } = require("../models/claimM");

module.exports.createRegion = async (req, res) => {
  for (let i = 0; i < req.body.regions.length; i++) {
    const region = await CountriesRegion.create({
      region: req.body.regions[i].region,
      country: req.body.regions[i].country,
      country_code: req.body.regions[i].country_code
    });
    await region.save();
  }

  res.json({ message: "Successfully Created Regions!..." });
};

module.exports.createCountries = async (req, res) => {
  for (let i = 0; i < req.body.countries.length; i++) {
    const countries = await Countries.create({
      id: req.body.countries[i].id,
      sortname: req.body.countries[i].sortname,
      name: req.body.countries[i].name,
      phoneCode: req.body.countries[i].phoneCode
    });
    await countries.save();
  }

  res.json({ message: "Successfully Created Countries!..." });
};

module.exports.createStates = async (req, res) => {
  for (let i = 0; i < req.body.states.length; i++) {
    const states = await States.create({
      id: req.body.states[i].id,
      name: req.body.states[i].name,
      country_id: req.body.states[i].country_id
    });
    await states.save();
  }

  res.json({ message: "Successfully Created States!..." });
};

module.exports.createCities = async (req, res) => {
  for (let i = 0; i < req.body.cities.length; i++) {
    const cities = await Cities.create({
      id: req.body.cities[i].id,
      name: req.body.cities[i].name,
      state_id: req.body.cities[i].state_id
    });
    await cities.save();
  }

  res.json({ message: "Successfully Created cities!..." });
};

module.exports.create = async (req, res) => {
  // const result = validate(req.body);
  // if (result.error) {
  //     res.status(400).json({ message: result.error.details[0].message });
  //     return;
  // }
  const expert = await Expert.create({
    userId: req.body.userId,
    linkedin_url: req.body.linkedin_url,
    introduction: req.body.introduction,
    summary: req.body.summary,
    experiences: req.body.experiences,
    educations: req.body.educations,
    certifications: req.body.certifications,
    volunteer_experiences: req.body.volunteer_experiences,
    skills: req.body.skills,
    projects: req.body.projects,
    publications: req.body.publications
  });
  await expert.save();
  res.json({ message: "Successfully Saved!..." });
};

module.exports.getProjectByExpert = async (req, res) => {
  const project = await Claim.find({
    experts: { $elemMatch: { expertId: req.body.expertId } }
  })
    .populate("employeeId", "-password")
    .populate("projectId");
  if (project.length < 1) {
    return res.status(200).json({ message: "Projects Not Found By Expert!" });
  }
  res.json(project);
};

module.exports.getExpert = async (req, res) => {
  const expert = await Expert.findById(req.params.expertId);
  if (!expert) {
    return res.status(400).json({ message: "Expert Not Found!" });
  }
  res.json(expert);
};
module.exports.SearchExpert = async (req, res) => {
  if (req.body.country) {
    const expert = await Expert.find({
      $or: [
        { "introduction.first_name": req.body.first_name },
        { "introduction.last_name": req.body.last_name },
        {
          "introduction.location_name": {
            $regex: req.body.country,
            $options: "i"
          }
        }
      ]
    });
    if (expert.length < 1) {
      return res.status(400).json({ message: "Expert Not Found!" });
    }
    return res.json(expert);
  }
  const expert = await Expert.find({
    $or: [
      { "introduction.first_name": req.body.first_name },
      { "introduction.last_name": req.body.last_name }
    ]
  });
  if (expert.length < 1) {
    return res.status(400).json({ message: "Expert Not Found!" });
  }
  res.json(expert);
};

module.exports.update = async (req, res) => {
  const expert = await Expert.findOneAndUpdate(
    { userId: req.body.userId },
    {
      $set: {
        scrap_datetime: req.body.scrap_datetime,
        introduction: req.body.introduction,
        summary: req.body.summary,
        experiences: req.body.experiences,
        educations: req.body.educations,
        certifications: req.body.certifications,
        volunteer_experiences: req.body.volunteer_experiences,
        skills: req.body.skills,
        projects: req.body.projects,
        publications: req.body.publications
      }
    }
  );
  if (!expert) {
    return res.status(400).json({ message: "Expert Not Found!" });
  }
  res.json({ message: "Successfully updated!..." });
};
