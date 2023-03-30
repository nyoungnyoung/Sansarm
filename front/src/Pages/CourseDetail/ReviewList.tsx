import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import axios from "axios";

interface idInfo {
  id: string;
}

interface reviewInfo {
  reviewerNicknm?: string;
  reviewDate?: Date;
  reviewTime?: number;
  reviewContent?: string;
  reviewRelDiff?: string;
  userNickname: string;
}

function ReviewList({ id }: idInfo) {
  // access token, refresh token 가져오기
  const AccessToken = sessionStorage.getItem("accessToken");
  const RefreshToken = sessionStorage.getItem("refreshToken");

  const [reviewList, setReviewList] = useState<reviewInfo[]>([]);
  const [userNickname, setUserNickname] = useState<string>("");

  useEffect(() => {
    // 코스에 대한 리뷰 목록 반환 axios
    axios
      .get(`http://localhost:5000/course/review/${id}`, {
        headers: {
          "X-ACCESS-TOKEN": AccessToken,
          "X-REFRESH-TOKEN": RefreshToken,
        },
        params: {
          courseNo: id,
        },
      })
      .then((res) => {
        console.log("리뷰 정보 받아오기 :: 성공!");
        console.log(res.data.reviewList);
        setReviewList(res.data.reviewList);
      })
      .catch((err) => {
        console.log(err);
      });

    // 유저 확인 axios
    axios
      .get("http://localhost:5000/user/info", {
        headers: {
          "X-ACCESS-TOKEN": AccessToken,
          "X-REFRESH-TOKEN": RefreshToken,
        },
      })
      .then((res) => {
        console.log("유저 정보 받아오기 :: 성공!");
        console.log(res.data.userNicknm);
        setUserNickname(res.data.userNicknm);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <StyledHr />
      {reviewList.map((data, index) => {
        return (
          <ReviewItem
            key={index}
            reviewerNicknm={data.reviewerNicknm}
            reviewDate={data.reviewDate}
            reviewTime={data.reviewTime}
            reviewContent={data.reviewContent}
            reviewRelDiff={data.reviewRelDiff}
            userNickname={userNickname}
            id={id}
          />
        );
      })}
    </div>
  );
}

const StyledHr = styled.hr`
  width: 90%;
  border: 2px solid #ececec;
`;

export default ReviewList;