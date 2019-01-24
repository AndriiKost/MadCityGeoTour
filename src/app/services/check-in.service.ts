import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(

    ) {  }

  calculateDistance(latitude, longtitude, objLat, objLon) {
    // const lat2 = this.fakeObject[2].coords.latitude;
    // const lon2 = this.fakeObject[2].coords.longitude;

    const R = 6378.137; // Radius of earth in KM
    const dLat = objLat * Math.PI / 180 - latitude * Math.PI / 180;
    const dLon = objLon * Math.PI / 180 - longtitude * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(latitude * Math.PI / 180) * Math.cos(objLat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.round((d * 1000 * 3.2808));
}
}

// initialCheckInHandler = () => {
//       this.state.buckies.reduce((lowest, cur) => {
//       // assign first element to the checkable object if it has lng and lat
//       lowest.lat && lowest.lng ? cur = lowest : null;

//       if (cur.lat !== undefined || cur.lng !== undefined) {
//         const distanceFunc = this.findClosestBucky(this.props.lat,this.props.lng, cur.lat, cur.lng, cur.id);
//         // manual coordinates for testing
//         // const distanceFunc = this.findClosestBucky(43.074119262953495,-89.45224463939667, cur.lat, cur.lng, cur.id);

//         // check if lowest is same as rendered
//         if (distanceFunc > lowest) {
//           return lowest
//         }  else {
//           this.setState({ buckyToRemove: parseInt(cur.id.slice(0, -1)) - 1, buckyNameTagged: cur.name })
//           return distanceFunc
//         }
//       } else {
//         return lowest
//       }
//     })
//     closest ? closest < 45 ? ( db.updateScore(), db.removeBuckyFromTheUserList(this.state.buckyToRemove), this.setState({distance: 'Congratulations! You have tagged ' + this.state.buckyNameTagged + '!'}) ) : this.setState({distance: 'Can not find any Mascot near you. You are ' + closest + ' feet away'}) : null;
// }

// findClosestBucky = (lat1, lon1, lat2, lon2) => {  // generally used geo measurement function
//   let R = 6378.137; // Radius of earth in KM
//   let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
//   let dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
//   let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//   Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//   Math.sin(dLon/2) * Math.sin(dLon/2);
//   let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   let d = R * c;
//   return Math.round((d * 1000 * 3.2808));
// }
