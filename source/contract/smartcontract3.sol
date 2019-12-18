pragma solidity ^0.4.18;

contract ManagementContract {

    mapping (string => string) MemberList; // 가입자의 리스트입니다.
    uint8 numberOfMembers; // 총 가입자의 수입니다.
    address contractOwner;

    struct myStruct {
        string   id;
        string passwd;
        string email;
        uint timestamp;
    }

    myStruct[] public Members;

    constructor() public {
        contractOwner = msg.sender;
    }
    // 이벤트 등록
    event Instructor(
        string id,
        string passwd,
        string email
    );

    function addProStru (string _id, string _passwd, string _email) public {
    /*
        bool add = true;
        for (uint8 i = 0; i < numberOfMembers; i++) {
        // 중복ID 방지용 코드
        // 문자열 비교는 해쉬함수(sha3)를 통해서 할 수 있습니다.
          if(keccak256(MemberList[i]) == keccak256(_id)){
              add = false; break;
          }
        }

        if(add){
          MemberList[numberOfProducts] = _id;
          numberOfMembers++;
        }
    */
        Members.push(myStruct(_id,_passwd,_email, now)) -1;
        numberOfMembers++;

        emit Instructor(_id, _passwd, _email);        // Add this 이벤트 호출
    }

    //가입한 등록자의 수를 리턴합니다.
    function getNumOfMembers() public constant returns(uint8) {
        return numberOfMembers;
    }

    //번호에 해당하는 가입자의 정보을 리턴합니다.
    function getMemberStruct(uint _index) public view returns (string, string, string, uint) {
        return (Members[_index].id, Members[_index].passwd, Members[_index].email, Members[_index].timestamp);
    }

    //컨트랙트를 삭제합니다.
    function killContract() public {
        if(contractOwner == msg.sender)
            selfdestruct(contractOwner);
    }
}
