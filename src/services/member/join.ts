import { JoinRequest } from '../../requests/member/join';
import { User } from '../../models/User';

/**
 *  <h2>Service Layer 를 HTTP 와 분리하자</h2>
 *
 *  <b>DTO 를 입력 받고, DTO 를 반환하는 것이 좋다.</b>
 *  <pre>
 *  * HTTP Request Body 를 서비스에 직접 주입하는 것은 서비스의 재사용성을 떨어뜨릴 수 있다.
 *    - Request DTO 는 Validation, 그리고 Service layer 파라미터 등의 역할을 할 수 있다.
 *  * Model(또는 Entity)을 직접 반환하지 말고, Response DTO 를 통해 반환하는 것이 좋다.
 *    - Entity 는 언제든 수정 가능해야 하지만, API 는 보수적으로 운영될 필요가 있다.
 *    - Entity 는 민감 정보를 가지고 있으며, 그 자체로 DB 스키마를 노출하기 때문에 보안 상 위험하다.
 *  </pre>
 *
 *  <b>Service layer 에서 반환 값은 HTTP status code, 또는 message 등에 관심을 가지지 않는다.</b>
 *
 *  <b>HTTP 응답이 생성 결과물을 필요로 하지 않더라도 서비스가 생성 결과물을 반환하면 재사용성을 기대할 수 있다.</b>
 */

export type JoinResponse = {
    id: User['id'],
    nickname: User['nickname'],
    email: User['email']
}

export async function join(joinRequestDto: JoinRequest) {
    const user: User = User.build(joinRequestDto)

    user.encryptPassword()

    await user.save()
        .catch((e: Error) => { throw e })

    const joinResponseDto: JoinResponse = {
        id: user.getId(),
        nickname: user.getNickname(),
        email: user.getEmail()
    }

    return joinResponseDto
}