module.exports = {
    type: {
        FAILED                  : { code: 0, msg: '요청에 실패하였습니다.'},
        SUCCESS                 : { code: 1, msg: '완료되었습니다.'},
        INVALID_PARAMETER       : { code: 2, msg: '잘못된 파라미터 입니다.'},
        NOT_AUTHENTICATION      : { code: 3, msg: '로그인 후 이용해 주세요.'},
        NOT_GRANTED             : { code: 4, msg: '권한이 없습니다.'},
        DATABASE_ERROR          : { code: 5, msg: '데이터베이스 오류'},
        EXCEED_TRY_COUNT        : { code: 6, msg: '요청한도를 초과하였습니다. 잠시 후 이용해 주세요.'},
        USER_NOT_FOUND          : { code: 7, msg: '사용자를 찾을 수 없습니다.'},
        AVAILABLE               : { code: 8, msg: '사용 가능합니다.'},
        NOT_AVAILABLE           : { code: 9, msg: '사용할 수 없습니다.'},
        SESSION_EXPIRED         : { code: 10, msg: '세션이 만료되었습니다.'},
        PASSWORD_MISMATCH       : { code: 11, msg: '로그인정보를 확인해 주세요.'},
        PASSWORD_LOST           : { code: 12, msg: '비밀번호를 재설정 해주세요.'},
        TIME_EXCEED             : { code: 13, msg: '허용시간이 초과하였습니다.'},
        FAILED_GET_DB           : { code: 14, msg: '데이터베이스 연결을 가져오지 못했습니다.'},
        NOT_PHONE_AUTHENTICATION: { code: 15, msg: '핸드폰 인증 미인증 상태입니다.' },
        AWS_S3_FAILED           : { code: 16, msg: 'AWS S3 쿼리가 실패하였습니다.'},
        IMAGE_PROCESSING_FAILED : { code: 17, msg: '이미지 처리 중 오류가 발생하였습니다.'},
        FILE_PROCESSING_FAILED  : { code: 18, msg: '파일 처리 중 오류가 발생하였습니다.'},
        NOT_ACCESSIBLE          : { code: 19, msg: '판매가 종료된 상품입니다.'},
        NO_RESULT               : { code: 20, msg: '결과가 없습니다.'},
        NOT_ENOUGH_STOCK        : { code: 21, msg: '재고가 부족합니다.'},
        NOT_ENOUGH_POINT        : { code: 22, msg: '보유 포인트가 부족합니다.'},
        NOT_SATISFIED_MIN       : { code: 23, msg: '최소주문금액을 만족하지 못합니다.'},
        EXIST_PAYMENT_PURCHASE  : { code: 24, msg: '결제 진행중이던 주문이 존재합니다.'},
        NAVER_NOT_USER          : { code: 25, msg: '네이버 아이디와 연동된 계정이 없습니다'},
        NAVER_AGREE             : { code: 26, msg: '네이버 연동이 되었습니다. 다시 로그인해주세요'},
        NOT_POSTCODE            : { code: 27, msg: '배송을 위해 연락처와 주소를 수정해 주세요'},
        NOT_ADDR1               : { code: 28, msg: '우편번호를 검색해주세요'},
        KAKAO_NOT_USER          : { code: 29, msg: '카카오 아이디와 연동된 계정이 없습니다'},
        KAKAO_AGREE             : { code: 30, msg: '카카오 연동이 되었습니다. 다시 로그인해주세요'},
        USER_DORMANT            : { code: 31, msg: '휴면상태로 전환된 회원입니다.'},

        NOT_IMPLEMENTED         : { code: 98, msg: '제공되지 않는 기능입니다.'},
        INTERNAL_ERROR          : { code: 99, msg: '서버 오류'},
        NOT_SUPPORT             : { code: 100, msg: '지원하지 않는 프로토콜 입니다.'}
    },
    get: (response, data, msg) => {
        const rs = Object.assign({}, response);
        rs.data = (typeof data !== 'undefined') ? data : {};
        if (typeof msg !== 'undefined') {
            rs.msg = msg;
        }
        return rs;
    }
};
