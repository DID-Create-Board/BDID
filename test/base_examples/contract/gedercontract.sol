
pragma solidity ^0.4.18;

contract ValidaterAdultContract {

    mapping (address => bool) Number; // 호출한 사람이 누구인지 저장
    uint8 numberOfMembers; // 총 등록자의 수입니다.
    address contractOwner;

    struct myStruct {
        string  gender;  // 성별
        uint  age;
        bool verified;  // true이면  이미 성인인증완료
        uint  timestamp;
    }

    myStruct[] public Validater;

    constructor() public {
        contractOwner = msg.sender;
    }

    // 이벤트 등록
    event Instructor(
        string gender,
        uint8 age
    );

    //성별과 나이를 입력받는 함수
    function AddVerifyAdultStru (string _gender, uint8 _age) public {
        Verifier.push(myStruct(_gender,_age, now)) -1;
        numberOfMembers++;

        emit Instructor(_gender,_age);        // Add this 이벤트 호출
    }

    //트랜잭션 데이터 호출하기
    //내가 보낸주소와 키값이 맞으면 true
    function VerifierAdult() public returns (bool) {
      bool flag = true
      if(fromaddress !=_address){
          flag = false;break;
      }
      if(flag){
      let fromaddress = _address;
      }
      emit Instructor(bool);
    }

    //데이터인증 + 개인키
    //데이터검증 + 공개키
    //keccak256

    Solution.deployed().then(function(instance) {
    return instance.setMessage(
    { from: sender }
  );
}).then(function(receipt) {
  console.log("setMessage() 실행으로 만들어진 트랜잭션의 정보");
  console.log(receipt.receipt);
});

    // msg.sender는 현재 함수를 호출한 사람(계정주소)
    function getNumber(uint8 _Number) public {
      Number[msg.sender] = _Number;  // msg.sender로 함수를 호출한 계정 주소값
    }

    //가입한 등록자의 수를 리턴합니다.
    function getNumOfMembers() public constant returns(uint8) {
        return numberOfMembers;
    }

    //번호에 해당하는 가입자의 성별정보을 리턴합니다.
    function getMemberStruct(uint _index) public view returns (string, uint, uint) {
        return (Verifier[_index].gender, Verifier[_index].age, Verifier[_index].timestamp);
    }

    //컨트랙트를 삭제합니다.
    function killContract() public {
        if(contractOwner == msg.sender)
            selfdestruct(contractOwner);
    }
}
