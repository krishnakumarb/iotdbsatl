import fetch from 'isomorphic-fetch'

export const REQUEST_STATUS = 'REQUEST_STATUS'
export const RECEIVE_STATUS = 'RECEIVE_STATUS'

export function requestStatus() {
  return {
    type: REQUEST_STATUS
  }
}

export function receiveStatus(json) {
  var offices = json.map(function (office) {
    return {
      "name": office.deviceId,
      "description": null,
      "occupied": (office.isOccupied == 0 || office.isOccupied == false) ? false : true,
      "lastUpdate": office.timestamp
    }
  });
  offices.sort(function (a, b) {
    // Sort by ascending order of name and then by descending order of lastUpdate
    // to make sure that the latest status is shown even if the API returns
    // duplicate statuses for an office.
    return a.name > b.name ? 1 : a.name < b.name ? -1 : (a.lastUpdate > b.lastUpdate ? -1 : 1);
  });

  return {
    type: RECEIVE_STATUS,
    offices: offices,
    receivedAt: Date.now()
  }
}

export function fetchStatus() {
  return function(dispatch) {
    dispatch(requestStatus())
    return fetch('/api')
      .then(response => response.json())
      .then(json => dispatch(receiveStatus(json)))
  }
}
