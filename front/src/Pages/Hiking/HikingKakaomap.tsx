import styled from "styled-components";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Icoords {
  courseXCoords: number[];
  courseYCoords: number[];
  hikingXCoords: number[];
  hikingYCoords: number[];
}

const { kakao } = window;

function HikingKakaomap({
  courseXCoords,
  courseYCoords,
  hikingXCoords,
  hikingYCoords,
}: Icoords) {
  // console.log('들어오는지 확인', hikingXCoords)

  // const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

  // const options = {
  //   //지도를 생성할 때 필요한 기본 옵션
  //   center: new kakao.maps.LatLng(courseXCoords[0], courseYCoords[0]), //지도의 중심좌표.
  //   level: 7, //지도의 레벨(확대, 축소 정도)
  // };

  // const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  useEffect(() => {
    const length = courseXCoords.length;
    const walked = hikingXCoords.length;

    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(hikingXCoords[0], hikingYCoords[0]), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 선을 그릴 좌표들
    const drawingLines = (
      courseXCoords: number[],
      courseYCoords: number[],
      length: number
    ) => {
      var linePath = [];
      for (let i = 0; i < length; i++) {
        linePath.push(
          new kakao.maps.LatLng(courseXCoords[i], courseYCoords[i])
        );
        // console.log(linePath);

        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열
          strokeWeight: 5, // 선의 두께
          strokeColor: "#e72a00", // 선의 색깔
          strokeOpacity: 0.5, // 선의 불투명도 (1에서 0 사이의 값이며 0에 가까울수록 투명)
          strokeStyle: "solid", // 선의 스타일
        });

        polyline.setMap(map);
      }
    };

    drawingLines(courseXCoords, courseYCoords, length);

    const drawingHiking = (
      hikingXCoords: number[],
      hikingYCoords: number[],
      length: number
    ) => {
      var linePath = [];
      for (let i = 0; i < length; i++) {
        linePath.push(
          new kakao.maps.LatLng(hikingXCoords[i], hikingYCoords[i])
        );
        // console.log(linePath);

        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열
          strokeWeight: 4, // 선의 두께
          strokeColor: "#238C47", // 선의 색깔
          strokeOpacity: 0.8, // 선의 불투명도 (1에서 0 사이의 값이며 0에 가까울수록 투명)
          strokeStyle: "solid", // 선의 스타일
        });

        polyline.setMap(map);
      }
    };

    drawingHiking(hikingXCoords, hikingYCoords, walked);
    console.log(hikingXCoords, hikingYCoords);
  }, [hikingXCoords]);

  // useEffect(() => {
  //   const walked = hikingXCoords.length;

  // var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

  // var options = {
  //   //지도를 생성할 때 필요한 기본 옵션
  //   center: new kakao.maps.LatLng(courseXCoords[0], courseYCoords[0]), //지도의 중심좌표.
  //   level: 7, //지도의 레벨(확대, 축소 정도)
  // };

  // var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 움직임을 그릴 좌표들
  //   const drawingHiking = (
  //     hikingXCoords: number[],
  //     hikingYCoords: number[],
  //     length: number
  //   ) => {
  //     var linePath = [];
  //     for (let i = 0; i < length; i++) {
  //       linePath.push(new kakao.maps.LatLng(hikingXCoords[i], hikingYCoords[i]));
  //       // console.log(linePath);

  //       var polyline = new kakao.maps.Polyline({
  //         path: linePath, // 선을 구성하는 좌표배열
  //         strokeWeight: 4, // 선의 두께
  //         strokeColor: "#238C47", // 선의 색깔
  //         strokeOpacity: 0.8, // 선의 불투명도 (1에서 0 사이의 값이며 0에 가까울수록 투명)
  //         strokeStyle: "solid", // 선의 스타일
  //       });

  //       polyline.setMap(map);
  //     }
  //   };

  //   drawingHiking(hikingXCoords, hikingYCoords, walked);
  // }, [hikingXCoords]);

  return <StyledMap id="map" />;
}

const StyledMap = styled.div`
  margin-left: 10%;
  margin-top: 10px;
  width: 80%;
  height: 200px;
  border-radius: 5px;
  /* z-index: -1; */
`;
export default HikingKakaomap;
