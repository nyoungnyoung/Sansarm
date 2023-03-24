package com.sansam.data.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "REVIEW")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REVIEW_NO", nullable = false)
    private int reviewNo;

    @Column(name = "USER_NO", nullable = false)
    private int userNo;

    @Column(name = "COURSE_NO", nullable = false)
    private int courseNo;

    @Column(name = "REVIEW_DATE", nullable = false)
    private Date reviewDate;

    @Column(name = "REVIEW_TIME", nullable = false)
    private int reviewTime;

    @Column(name = "REVIEW_REL_DIFF", nullable = false)
    private Character reviewRelDiff;

    @Column(name = "REVIEW_CONTENT")
    private String reviewContent;

    @Builder
    public Review(int reviewNo, int userNo, int courseNo, int reviewTime, Character reviewRelDiff, String reviewContent) {
        this.reviewNo = reviewNo;
        this.userNo = userNo;
        this.courseNo = courseNo;
        this.reviewTime = reviewTime;
        this.reviewRelDiff = reviewRelDiff;
        this.reviewContent = reviewContent;
    }

    public void createReview(int userNo, int courseNo, Date reviewDate, int reviewTime, Character reviewRelDiff, String reviewContent) {
        this.userNo = userNo;
        this.courseNo = courseNo;
        this.reviewDate = reviewDate;
        this.reviewTime = reviewTime;
        this.reviewRelDiff = reviewRelDiff;
        this.reviewContent = reviewContent;
    }
}
