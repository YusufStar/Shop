import React from 'react'
import Navbar from "../Components/Navbar"
import Banner from '../Components/Banner.jsx'
import ProductList from '../Components/ProductList.jsx'
import Footer from '../Components/Footer'

function Home() {
  const brands = [
    {
      image: "https://s3-alpha-sig.figma.com/img/affe/9b5e/1246238d270186a9421c08e1555094a6?Expires=1669593600&Signature=P-shYJooupRHWfaga9phNpCISZ3KInqcD7rNBq1XlQvGF4QRNY5lVB35W8cTtfNJMExLipEjRP~NckpPHLBaCD7oEfuYajXjXI-iIbMvsz0TFpqYAgtTi8IAGsp8UJeyy8ipI5TsqfDBymYkQ~z2klHoHSIvdzkothKRtswWOzRKOKObEAUoc6sBZtU6eMVZIOmx~~ptme1ZhOPu7aEWQ46kuNJTOK8F-5iTkEr~xlUzUGhkZ2ryCX~b6-SvJZZC5cUfgcRU1i9JgpQbqywj1ILOSyGqvWNcR1UJvBMtp~13XUzSa6SgIvtvMAX9fhZ9CPCgugmo-cxjQOFEEiAZYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/40f4/e746/593f30d4107fe6f775940401b63cc5bf?Expires=1669593600&Signature=Sk2ZW0jb8Ixosj22LZ4p~JFBXlISdeZHEljwtdhAxlYIyp00SsX22-jnipE2OejUdLz4wYOub3YdM7b~4ROyPw0Gv0GwdGJxvBQIn7uxiaatJpcLBXCcNh6YvMcRiQdEZricPqZDBFomQV7wAOrzTyZ25MTEzmgbla55EuvJbMupRXEluSYHwZ4RRSlSR42rvjtC6DY42EU3AeWKjUwR15tMdLyFWWPqLOcOG1dp3BMQY8HWlge7PD42BxX-xN4c9buD0arB5oH-h01EmG62QEzNIvRx3AgJvHniNUyhNkvEVBtZxCINEqJt9U1DosUmMzz4dnxke4Hb9CxxxXDKbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/a150/ba75/b9d05c538b3459c9fb007cdc5e521edd?Expires=1669593600&Signature=QgEuqe-D2I4cNuT0zeMlXk3CEohDGWbMdXfplBh3JcMN~wgY7GcgtouaTX6BUDJPpw15Y~o30aHKF1Zx1W5niKev~212xmd7~HamZR3r2zzvKvjr3z3Rj9bLdvhohqzOsia4ciFraRskn5GswujMCTLpEXrFGyMCf60BHRNAB2mbahpwORVi9~jOJcaws9P8H6XVLuPnFqe0~DTebbw~HT9wLDuSssuyOehIVHMvztUCtsw0FdWDN~VwSG59k8HznBVXX3hJHOYrE35-j-ck3lo6PqvrHuLPpyTHabD~~SMf8BzNGS99POjxQkymd41apTD3iEhgQVH7hNrYESJz~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/8e99/0d93/c48d4690d514db1cbb10a6068460c6b5?Expires=1669593600&Signature=MAWCewLfmQz42LLeaNBs-~cWlh9ZnXRp7YFy153copz~ILCNf5vgXBO7WNGia5pP74vIxR9fVFyfNNFa5vRSbeQ6YRk2CTzQ3fCsOAknj0ruR9kXNOxK99yGb1frCOWrH0mXPwlrMrr0qUnRTTuYWBrRPWMWXawEWLdTO8WMc3oFgjDZSjsd2bxZ1RiZdUByLCfNDTJ0c4Cy6X1LPDrTFWoGwa-SnymV~9ac0PHDE3Qd1IrtwRZtlx2SbvLEqODmdRby48oqpunFttNjh5EBhgQBxDMVQ0k9n~xcFbNnat4tgzg775lh2IUeU60-AcEjYSlEZMEIyxDv3U8pxju-pw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/a903/6d2d/68a5dc03c19d7e62d42fdad9feaaad4c?Expires=1669593600&Signature=IZlDrCuO3TvqQ3IqnODK3t48qAbGyqfSxjkAv~VU6b9F2SsFFwssYEq9-d4hGr4gffua7s6wS4jzN15P7W-d5t~3Sze3uFcaTnEjEWM4XyuNo5vrXObhgLP~mhFu-NyLup3TFt-xPuCnqtqZsprNhGjYF-C5-FpNnvFLc5TQnqPhVbzsrwBVFA~lXDRTsurf4r~ihO4jL1e4~kGGKNbLnSczSs9e8R~Co-IuoaDudVwKPH1fbSzGj4KBwlR1gueEvlXWe1KUdG0O7Ue2qSIOwdVAY8p4~MN9Q9DNjifhGzdZ3pJV96ci8VEedR5O4zStK2XmpbdYW-zgZprdV89MwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7b3e/c66f/4667262ec4e7fbcf09aab1a6b03ff0b0?Expires=1669593600&Signature=dIumJGRDzRPvtF6M6CgxNDBKJN5E9fBO0fJAVNYSm1vknQhNY3EKFkTJZmGwb0dvcnfc~wxb8RNYffr8Mnz6XpgwVYm5hag8~MNmZRFDitdmOFDKY0H81rYtguMplJSykkxT3KJtdqCV8qnLaZCYgsNL392ouPWHyykcwt5okrfnHT3-VUL5AtTa0eqMrN4KV4G7D2ChzWdzzwtHTN3h9c-GMnFZ4oQPPEEPpVQmiQ-GVhaXcXarW1XSWhKW3qUwwH5tEqLxAbjudO8C7BbioChHkfdrWjMx8j1Fb3NUssfmHF5lEwaqrolTrD7sefA6kKzqVd~j6ckRuIEM3DV1~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/aab9/17e9/76845a56b7515732e12424d1898d1714?Expires=1669593600&Signature=LFsnoUgYQHyvBZG-G197bLcIVVkiL8pmUoVBDWy-vS~mp4u5~MK-Aqrl69~FmeN4pf1c-aYCLCEz6nxNhpIJSlLg2hZ7hcJPvUgzVwSK~eU66i6lwGDR7aRhqPDVu~6d9oAMrzuTzqEmIJG4oPsOWEQPM9wMRJYAkjeawyFTRZ~cSgpAQ1guh3FLCNtWC-NRQnEZnlI205OfnCKFR3FQqKCdRaQzTAM21I3ERzd5fqWEiS3hoNO9H92rXgchAZ7glTpdVzWuC1OrBNw-2MKrhw~j01ub6VyFo5zK~~dO9blf0BKRSNl42YGkseznLCf43sZVH2MIye-Nb9KuH24JLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }
  ]

  const followUs = [
    {
      Image: "https://s3-alpha-sig.figma.com/img/8532/fa8d/91174ac13469287015e406f5d3df1d0d?Expires=1669593600&Signature=D~a6OkwWo29-DSTwklclCjJSkiP36xQ~-AQp7jswwFzwqUUPXv1pxigSaoivYYeXrD3Eqk-UBsyk8ktNddP7I03AYh7TZB~5KnD0Lmsel0cyRD1b8s-8ZAanJp20UrN4Cji5d3hu2o9AXEU6-MPWLTBQ0k8MfJ2LbR5qD2VJ-vnyhhkSKTwKvprSCC5zz5R6g2IpVUmyn6tXLvJIGxS1qRXZTBl2lTlUh3A5phcCsvcNizcygRyFBkhEnkLl4OYBcHG7l8L1ZBAxf4ZF-T1Ia13V0bCL6yN6H2dvxiB0KdOO1Z9P3W7ykTqPZit8GPOXsRXOlIhoHYhWtY06Hbwu4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/5be0/ede2/368288a84fd12e4ed8c8b62135ec6cda?Expires=1669593600&Signature=S9zHLSFy17bjOevdxj-BOwIF2Gg28stpquhSiE7apbEGOe1ZKSzxqi9J~As~RzLRS11lrqNaAnG1MMNDsmSOlI7IxQQa5nZvHVd~VBruBDlE2YHt-L9HCtzuwwlDW~tTCWTf6mSChVEUDf8aG0L~IwrYGtFGyObEk4DUzMKsK8XLbfdDfq2SgqtamFZ6JsPJMQJdTX~E4P0zfXjUkAYNTSdZIkECRU4aWKPUrvG8yxaAV407-78H7cUdVJM8wjDIU4T1Ey6qJcc9qBUMWvzA812qg~7DiM~3MV6yxJ8xM1GbMzbXMW3EaW4xL6Kb2tpPFYEAlhTagTdsl2zCJYXBpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/04c1/2d01/2229aaaace1943ba79a8c018d1c99331?Expires=1669593600&Signature=EBQE9h4XwmEH5TFESgL3N-W4m43AdAyQFly6TYn04PMzjsCljDKO-XKH97rS0h5rJQGcFf6jVpXBppVGbUDzPDCsFvoozFweeU-ROXWHyKHRSKZwv~u8GkucUHqjrmKnVhbS6lspntEO5hkYxtuI0MkyAKYZ1mKQ6DUYL0D4L-8QMtmlQGvQRqtcXF2bHeYNMS1Dq8Jf9Rax9WbWvs5ueyMwO6Fek~ijxaxMROuRNFJbjANhlKoM7cWXf1HfWE-Yt8uCDI6PZaqUMy2TG-uoF32bpnH7BnIuJ9-tWAdZ2CYsV434r2M8fLNaJirAnNSd5s0yTLk1kk9gHKuupqD6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/f9d2/a30e/e2dfbe24c387481a5017df34b45ab1cb?Expires=1669593600&Signature=CD90yHC3Ky6Dgd0pZxRGRtguslYxJN1Zg699relba8u5QVF6lPqxgGUH3qbqfI3DDXHWIq4L28xIAmKP0TrXNn9ehxQZXf01sOoOKEWGahWrkStMFDnBYSqOv9zbjdt6gM~4QlHeccOibSI8XMY-ZwxxGEZ~tZMiMErIOejycUBMbuw5Vl2Awsrq8kWfkXGYSxJLTPSWF11M~67cfO7Xvn3karAZpQyNPs9WmO~DT6tknwe1V3psXzeavR-9AjD1bTZueBSj4R9nWVquPxv6noQnesSKPK-zdJ1Ylmlb1gn1ZEbrkAKnuHPAkytBcpeTARFcfrHlAJXaqlaU1Z0QIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/f47f/fa43/efd22ae92157650cc1ce07fc033e9296?Expires=1669593600&Signature=P2bp2g-kQcGCt98fmqB923Pca78dG3TSIJY5IybPCtDNF9ac80xxaBUHxsYLHKm~FloeRnau4n8dXwo4TkImORKQl6KKHxJVVkG1ASh~d-yUreyZigSihHf4bTLD1ex8MPwAPaDrBVpcFDF1xCreleZHwuEloCHF~fYz-Vl7Egda9Ed7f9-udsygU3TCCnfOkB2bvxhAAZm3~V4yUIxtsmNCLCJwbO2kl6QICXOB3-~c2l6Yy~R8N3B0n21FIEIp3d4OuNTBUL4IAZJ0r5wTp0ilGxOwIlMx2~~tmkAAPbJLma03LGU3efX71gO-qpUa8FRHS62XUquNbhYm52MdKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/b168/aeec/5188465031b1f2eaa5f2d208376cb566?Expires=1669593600&Signature=ZY4WR~R-lGQzRX8lFDEPIo6BOvPAnz3aMKPe9qE1U4LCKCYBozfIPkybXzabOjmgL--6X~d7FnrVb6t5fA~jjQhA~Cfyaw74Br7RFCyEG8vk8dGl9Y7cNrLRkUxfCSw-PiFYHKF8cJbfBlnT9NNN26NqlS05LRfaaick6BkLRfkpqFZ0lI~5MGGrm1c4vGz2sQ-06q1TmEAHIULV2zzTl4Q-VbRy8jcdilNeuX3ir5KhsH5E7EPBSHiVuKvJynRHBIkn83LXfJHRZK9NaK6dVBiZpRkVu2DF01301qMukl5tKBfIS4xCAtUuK5bx5t7MDst~sFgjhkgV11GlobqQYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/17b3/b50a/87e9f9b1aa77bb8b4bc47ace2d1bb2f6?Expires=1669593600&Signature=RdFknVurokXzuNp6~rlDVeUm8yn1B~5gLTwEpP2uaqJyPU~R6fK68BgzxaSD7H5ye2ynC7yLQO7ixYakGGpjt-45x71qXwKEX4g4lrx9grWxF5P9ypG14SyNxg4W0X1uPhuSnWUpUlicYjsJwQLWYyMZax8T2~meyBj6AYNflHa31XqZ41thJi7u~0aapZIaXvkHzrgJbKyxbLtV3WBJ8PHRpJxxwHcCUIzzbL0q2hHz9-M5eH7RLSdmnYHhnbueI4JjifY7GoCW-6gxbw574-3jZGzH9EUfwaaCGvnqkFHOSARVOVJ4BZbpPJjIDGuzW2xLaU4w-mz0FLWm5TZ4YQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/17b3/b50a/87e9f9b1aa77bb8b4bc47ace2d1bb2f6?Expires=1669593600&Signature=RdFknVurokXzuNp6~rlDVeUm8yn1B~5gLTwEpP2uaqJyPU~R6fK68BgzxaSD7H5ye2ynC7yLQO7ixYakGGpjt-45x71qXwKEX4g4lrx9grWxF5P9ypG14SyNxg4W0X1uPhuSnWUpUlicYjsJwQLWYyMZax8T2~meyBj6AYNflHa31XqZ41thJi7u~0aapZIaXvkHzrgJbKyxbLtV3WBJ8PHRpJxxwHcCUIzzbL0q2hHz9-M5eH7RLSdmnYHhnbueI4JjifY7GoCW-6gxbw574-3jZGzH9EUfwaaCGvnqkFHOSARVOVJ4BZbpPJjIDGuzW2xLaU4w-mz0FLWm5TZ4YQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
    {
      Image: "https://s3-alpha-sig.figma.com/img/3a8a/109d/ca366fa2016ad09ace454407ee8d1099?Expires=1669593600&Signature=A9zmbsDTyep7Y8aHsYSbc9AakLxeB1YV6nDRLD8l0Q0qDWZjpOLPYBlEub3kjLbHCNwaD9wRx9LEH9Qoe96XKSbuE8S1XU4xJYxYcH1eiR3M4ZcUtmU0fWmsGsa5n7~qYNnD-gsYZHR~mBS9oOs38jnpBO5wBNRozvgzshmEqBdz7zTzVN5HG8e4oOgmAg41lmdDKZyHMgmiX91MckZTQ~BoOwEFtkpda-qbQkNWCG~JX1SET5DH01S2mJOf394eU7ywwsYqqLAZ~j2DtnJcgC3XZxlh6CZh0PkjsgjGWgyZw005NEiLQ5cO6r9Grwvy891oKBCTLt21tQWP0oySmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      Text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      Date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    },
  ]

  return (
    <div className='h-full w-full flex flex-col items-center'>
      {/* Navbar */}
      <Navbar/>
      {/* Banner And Images */}
      <Banner />

      {/* Products list in home page */}
      <div className="w-[1460px] h-full flex flex-col items-center gap-5 py-3 pb-5">
        <ProductList link="/Catalog/Desktops Pcs" bg="https://s3-alpha-sig.figma.com/img/6778/36f8/66f2a591e4a0214dfd25835f14051a09?Expires=1668988800&Signature=TyRhHmp1qimZmBDYgpR1CQKCAQFe8W-G660jEDgeJE~3SguRQnJJxClt85jOFDB7GkQSy2Oc~amEJu~ZdEohiqHe8oGgP7O4f49KxZ73RwxfZ9kRSDr0mGSYjCJoUnz1kQr68kFDqz8VhpHXDU2g2eCU-YPBNXrljQgzZdBKvL3aGyEsPImq-VvwzYSdAdBp3-Mx8noEpSd8jt3W~6O3jDVoEf6MWGOcZF~QwG-kg4iL-nCLOrGK2n-eZZNwiGfBf76pbgMOMfiaHi9g9VSX2WAsZwQWyncF-MbrqTbzs8bbbJHBI7SQAXJGc8yd1uwqHN2dXwEO1vEtE8gJG9XXzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" Category="Custom Builds" title="Custom<br/>Builds"/>
        <ProductList link="/Catalog/Laptops" bg="https://s3-alpha-sig.figma.com/img/e8a7/959b/1333cafd3d0886863a40096034e66fc9?Expires=1668988800&Signature=DOCLVRuwG3bCJIITlAY89Fdxadviik073TF0q2VRij2O46WGYvLcaxbKtDZ4UKyb1OXXyFih3QVekwmNOlgVdZIDmC6AX47TyYX2evZxpL-zkWS22VssuEyuyGhFbkTAR-nBa5u8sQ0KzDEtAf8CDUV5TA5qjHFbQa973zDftObbXhNEIwxEb1IQKVC9YnPS~1jx2FJbbioMbvK35ZstcqFRVC3hjPSCr~bIt61KzY73gb0ng1Y46qDSe67wzzBpMIex-ZeH19S~~C0FZJKYzc0ts~DVD4gFM1IDCHYo6buzYg8l4T34fpAUGmVwDXbWwQv9mX1AKaw0BiveOgCZmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" Category="MSI Laptops" title="MSI Laptops"/>
        <ProductList link="/Catalog/Desktops Pcs" bg="https://s3-alpha-sig.figma.com/img/da2f/7b79/dcaaca8473865ba1cdc9abbde7dfbaea?Expires=1669593600&Signature=gGVUGjMSfiQjtkErmmT22yve-CiPtlh4RJWHYR3xWTv~nNaAtHCYFO1hKVbRsxnlDAxj4UtrYxojjuCDPDPU~6dZXT9caD~SUwFc7GKPTYdCDucqHd2PIy89ziHLMJz0EccMnqTxJtZV4w0zQ0OblWJNT6MtCFtKG6QVm5N45JKhksovbaHY8PiVGvroRmsE5y98z3zBT7fKC-6zWnp8w4QxKlHI0W1eRb2~UuqxEYgYOp0848IHzFcgMRAqf6Y7BxY4hECeauuhYFK7AYPFuscp4fbBK5Euz9PthrKE4fnwdFK~s-P4i0Ug06vEFBDReGWdl~a1DaRoEq9mk~-2cA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" Category="Desktops" title="Desktops"/>
        <ProductList link="/Catalog/PC Parts" bg="https://s3-alpha-sig.figma.com/img/e038/37c7/1da86f4deb194ec628c7f9606daa14cb?Expires=1669593600&Signature=HdpLoIkvjnfCSAWIDPncMDAIMTxMbzYWanM6l-Fe54qPofyejCzQKuHbenCN-3Vh8Ii-znQM7XkVvPPSIpqbgKDwvtT1c9hUB8c-0jSx67qmwZcuddu4PbGY7mJNmFATE7x0j7z7GX7gA35gRvyVlZVVHYLFJGogly4Kf7BrfOrZhKKR0QQ3biN1T4kSCeua~ymRp82Yh7gwLulIvAJJrSbPUg7V8gnmiy8y18JKROFQ-aYMaJ1FpiXXpohCf9TrAYWI3KX7R8FuF8dQ0XvryQDOXjDkSN~iqLJPpMKlJ766Y4HApziEnc4HIspDfXBLsgvVVz4vXCQjoBd24eJp5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" Category="Gaming Monitors" title="Gaming Monitors"/>
      </div>

      {/* Brands */}
      <div className="h-[150px] w-[1460px] my-3 flex items-center justify-between">
        {brands?.map((brand, i) => (
          <>
            <img key={i} src={brand.image} draggable="false" className="w-[150px] h-[80pxd]"/>
          </>
        ))}
      </div>

      {/* Follow Us */}
      <div className="h-auto w-[1460px] flex flex-col gap-5">
        <h1 className='font-[600] text-[22px]'>Follow us on Instagram for News, Offers & More</h1>
        <div className="w-full h-auto grid grid-cols-6 gap-y-5">
          {followUs?.map((item, i) => (
            <>
              <div key={i} className="w-[225px] h-[322px] flex flex-col items-center">
                <img draggable="false" src={item.Image} className="w-[235px] h-[151px] object-cover"/>
                <h1 className='font-[400] text-[12px] text-center custom-padding-01'>{item.Text}</h1>
                <p className='text-[#A2A6B0] text-[10px] font-[400]'>{item.Date}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home