const Body = ({ asset }: { asset: string }) => {
  return (
    <>
      <div className="text-lg flex-col h-full rounded-t-[50px] bg-turquoise-50 py-8 px-7 s">
        I confirm that I am voluntarily joining this member-based community
        stokvel for the purpose of group livestock acquisition. I understand and
        accept the following: This is a stokvel (rotational savings scheme)
        registered under common law and governed by a member resolution charter.
        This initiative does not provide financial advice, guarantees, or
        returns, and is therefore not regulated under the FAIS Act. My
        participation is based on mutual contributions toward livestock
        ownership and not as an investment or financial product. I consent to
        the collection and processing of my personal data under the Protection
        of Personal Information Act (POPIA) for purposes directly related to my
        membership, contribution tracking, asset allocation, and communication.
        I have read, understood, and agreed to the Terms & Member Resolution
        Charter of the stokvel.
      </div>
    </>
  );
};

export default Body;
