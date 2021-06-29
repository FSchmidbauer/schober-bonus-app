import styled from "styled-components";
import Voucher from "../../images/voucher.jpg";

export default function BossVoucherOverview({ vouchersOnApi }) {
  return (
    <>
      <h1>AKTUELLE GUTSCHEINE</h1>
      <ActionInfo>
        Folgende Gutscheine sind im Moment für Deine Mitarbeiter verfügbar:
      </ActionInfo>
      <VoucherSection>
        {vouchersOnApi.map((voucher, index) => (
          <>
            <SingleVoucher key={index}>
              <VoucherImage src={Voucher} />
              <VoucherText>
                {voucher.vouchertype} <br />
                <span>
                  von {voucher.voucherpartner}
                  <br />
                  <span>
                    über {voucher.vouchervalue} {voucher.vouchercurrency}
                  </span>
                </span>
              </VoucherText>
              <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
            </SingleVoucher>
          </>
        ))}
      </VoucherSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherSection = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

const SingleVoucher = styled.section`
  background: lightgrey;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem 1rem 0.5rem;
  position: relative;

  :nth-child(even) {
    background: white;
    border: 0.2rem solid lightgrey;
  }
`;

const VoucherImage = styled.img`
  border-radius: 1rem;
  max-width: 16rem;
`;

const VoucherText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;

  span {
    font-weight: normal;

    span {
      color: red;
      font-weight: bold;
    }
  }
`;

const BonusPointBubble = styled.section`
  background: lightgrey;
  border-radius: 0rem 1rem 1rem 0rem;
  color: red;
  font-weight: bold;
  padding: 0.5rem;
  position: absolute;
  bottom: 14.5rem;

  :nth-child(even) {
    background: white;
  }
`;
