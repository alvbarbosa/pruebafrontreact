import { DATA } from "../../types";
import Geocode from "react-geocode";

export const searchPoints = () => async (dispatch, getState) => {
  try {
    const { originAddress, destAddresss, description } = getState().form.points.values

    let response = await Geocode.fromAddress(originAddress)
    console.log(response)
    const point1 = response.results[0].geometry.location;
    response = await Geocode.fromAddress(destAddresss)
    const point2 = response.results[0].geometry.location;
    console.log(point1, point2, description)
    dispatch(setPoints({ point1, point2, description }))
  } catch (error) {
    console.error(error)
    dispatch(setPoints({
      point1: { lat: 4.648, lng: -74.247 },
      point2: { lat: 10.400, lng: -75.543 },
      description: getState().form.points.values.description
    }))
  }
}

const setPoints = (data) => ({
  type: DATA.SETPOINTS,
  ...data
})