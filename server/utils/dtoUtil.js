function recordsDTO(data) {
  return {
    "businessUnity" : businessUnityNameDTO(data.buniessUnity),
    "location" : locationDTO(data.location),
    "boxDraw" : data.boxDraw,
    "contentDescription" : data.contentDescription
  }
}

function businessUnityNameDTO(data) {
  return {
    "businessUnityId" : data.id,
    "businessUnityName" : data.name
  }
}

function locationDTO(data) {
  return {
    "roomId" : data.id,
    "roomName" : data.name,
    "floor" : data.floor,
    "building" : data.building
  }
}

module.exports = { recordsDTO, businessUnityNameDTO, locationDTO };
