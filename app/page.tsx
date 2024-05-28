import ContentCard from "@/components/content-card";
import HeadTitle from "@/components/head-title";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import card_image from "../public/card-image.png";
import course_image from "../public/course-image.png";
import home1 from "../public/home1.png";
import about2 from "../public/about2.png";
import about3 from "../public/about3.png";
import course1 from "../public/course1.png";
import course2 from "../public/course2.png";
import course3 from "../public/course3.png";
import mission1 from "../public/mission1.png";
import mission2 from "../public/mission2.png";
import mission3 from "../public/mission3.png";
import teacher1 from "../public/teacher1.jpg";
import teacher2 from "../public/teacher2.jpg";
import student1 from "../public/student1.png";
import student2 from "../public/student2.png";
import signed from "../public/signed.png";
import homebg from "../public/homebg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/course-card";
import TeacherCard from "@/components/teacher-card";
import StoryCard from "@/components/story-card";
import FeedbackCard from "@/components/feedback-card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";

import { Check } from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* <section id="home">
          <div className="max-w-5xl mx-auto pt-40 text-center sm:pb-20 px-4 sm:px-0">
            <p className="sm:leading-[72px] text-4xl sm:text-5xl font-semibold">
              Where happiness meet high scores
            </p>
            <p className="max-w-3xl mx-auto leading-[24px] text-base text-[#666666] font-regular px-4 mt-8 sm:mt-2">
              Sứ mệnh giúp người học xây dựng tư duy đúng về việc học và xây
              dựng thói quen học tập tốt thông qua trải nghiệm học Tiếng Anh và
              xây dựng cộng đồng những nhà giáo dục toàn diện.
            </p>
            <div className="w-fit flex items-center mx-auto mt-8 gap-8 cursor-pointer bg-[#9747FF] p-2 pr-8 rounded-full">
              <Link href={"https://youtu.be/CKuKRRFoVOg"}>
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/play-icon.svg"}
                    alt="play-icon"
                    width={38}
                    height={38}
                  />
                  <p className="ml-1 text-white">
                    Xem video để hiểu thêm về chúng tôi
                  </p>
                </div>
              </Link>
            </div>

            <div className="w-2/3 mx-auto grid sm:grid-cols-2 mt-20 gap-10">
              <Image
                className="mx-auto rounded-3xl border-8 border-[#9747FF]/80"
                src={"/home1.png"}
                alt="image"
                width={320}
                height={400}
              />
              <Image
                className="mx-auto rounded-3xl border-8 border-[#9747FF]/80"
                src={"/home2.png"}
                alt="image"
                width={320}
                height={400}
              />
            </div>
          </div>
        </section> */}
        <section id="home">
          <div className="w-full h-[80vh] sm:h-[70vh] mt-32 bg-gradient-to-b from-white to-[#E54981]/80">
            <div className="max-w-5xl mx-auto text-left sm:pb-20 px-4 sm:px-0 sm:flex ">
              <div className="w-full h-[40vh] sm:h-auto sm:w-3/5 sm:-mr-20 pt-10">
                <p className="sm:leading-[64px] text-4xl sm:text-5xl font-semibold">
                  Where{" "}
                  <span className="text-[#E54981] uppercase font-bold">
                    happiness
                  </span>{" "}
                  meet{" "}
                  <span className="text-[#E54981] uppercase font-bold">
                    high scores
                  </span>
                </p>

                <ul className="font-semibold my-8 sm:text-lg uppercase grid grid-cols-1 gap-2">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#E54981] mr-3 text-white flex items-center justify-center">
                      <Check size={16} />
                    </div>
                    <p>Lộ trình học cá nhân hoá</p>
                  </li>

                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#E54981] mr-3 text-white flex items-center justify-center">
                      <Check size={16} />
                    </div>
                    <p>Phương pháp học phù hợp, thú vị</p>
                  </li>

                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#E54981] mr-3 text-white flex items-center justify-center">
                      <Check size={16} />
                    </div>
                    <p>Học bổ trợ miễn phí bất kể thời gian</p>
                  </li>
                </ul>

                <div className="w-fit flex items-center mt-8 gap-8 cursor-pointer bg-[#E54981]/80 p-2 pr-8 rounded-full">
                  <Link href={"https://youtu.be/CKuKRRFoVOg"}>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/play-icon.svg"}
                        alt="play-icon"
                        width={38}
                        height={38}
                      />
                      <p className="ml-1 text-white font-medium">
                        Xem video để hiểu thêm về chúng tôi
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative sm:w-4/5 sm:-ml-10 sm:-mr-20 sm:h-[70vh]  h-[40vh]">
                <Image
                  src={homebg.src}
                  alt="image"
                  width={700}
                  height={700}
                  className="absolute bottom-0 w-[95vw] sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="max-w-5xl mx-auto pt-40 px-8 sm:px-0">
            <p className="text-5xl font-semibold text-center">
              Trải nghiệm <span className="text-[#E54981]">Ưu Việt </span>
              dành cho người học
            </p>
            <div className="grid grid-cols-1 gap-32 mt-32">
              <ContentCard
                id={"1"}
                first_title="Cam kết với học viên"
                second_title="Cam kết đầu ra - Cam kết khoá học "
                content="Tin vào năng lực và sự tận tâm của trung tâm, MERRY cam kết, cùng với sự nỗ lực và chăm chỉ của học viên, bạn sẽ đạt được kết quả mình mong muốn trong thời gian tối ưu nhất."
                imageURL={home1.src}
              />
              <ContentCard
                id={"0"}
                first_title="Không giới Hạn"
                second_title="Học bổ trợ miễn phí, không giới hạn"
                content="Đội ngũ giáo viên, trợ giảng luôn sẵn sàng giúp đỡ và giải đáp mọi thắc mắc của học viên. Đối với MERRY, sự cố gắng của bạn là vô giá, chúng tôi trân trọng 
                nỗ lực ấy và sẽ dành mọi điều tốt nhất cho bạn."
                imageURL={about2.src}
              />
              <ContentCard
                id={"1"}
                first_title="Không giới  hạn"
                second_title="Phương pháp học tập khoa học và thú vị "
                content="Chúng mình luôn tìm tòi và học hỏi những phương pháp phù hợp hơn với từng cá nhân, từng hoàn cảnh nhằm rút ngắn thời gian tuy nhiên vẫn giữ vững được hiệu quả của những buổi học. Ở MERRY, bạn chỉ cần chăm chỉ, còn lại chúng tôi sẽ giải quyết."
                imageURL={about3.src}
              />
            </div>
          </div>
        </section>{" "}
        <section id="teachers">
          <div className="max-w-5xl mx-auto pt-40 px-4 sm:px-0">
            <p className="text-3xl font-semibold mb-16 text-center sm:text-left">
              Đội ngũ giảng viên của chúng tôi
            </p>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <TeacherCard
                    id={"1"}
                    first_title="ĐỘI NGŨ GIẢNG VIÊN"
                    second_title="Nguyễn Thanh Thảo - 8.0 IELTS"
                    content="Nguyễn Thanh Thảo là một giáo viên luôn tâm huyết với nghề, trong suốt những năm giảng dạy, Phương Anh đã giúp rất nhiều bạn trẻ đạt được số điểm mong muốn của mình đồng thời tìm ra những phương pháp học mới có hiệu quả và phù hợp với từng học viên."
                    imageURL={teacher1.src}
                  />
                </CarouselItem>

                <CarouselItem>
                  <TeacherCard
                    id={"1"}
                    first_title="ĐỘI NGŨ GIẢNG VIÊN"
                    second_title="Hồng Duyên - 8.0 IELTS"
                    content="Hồng Duyên là một một giáo viên luôn lắng nghe và cố gắng đáp ứng mọi nhu cầu học tập của học viên. 100% học viên để lại feedback tích cực sau những khoá học với giáo viên."
                    imageURL={teacher1.src}
                  />
                </CarouselItem>

                <CarouselItem>
                  <TeacherCard
                    id={"1"}
                    first_title="ĐỘI NGŨ GIẢNG VIÊN"
                    second_title="Trịnh Hải Đức - 8.0 IELTS"
                    content="Với tính cách dễ mến, thầy HẢI ĐỨC luôn chiếm trọn điểm 10 thiện cảm trong mắt mọi học viên. Trải qua những lớp học của thầy, điều khiến các bạn ấn tượng nhất luôn là sự tận tâm và nhiệt huyết trong mỗi buổi học."
                    imageURL={teacher1.src}
                  />
                </CarouselItem>

                <CarouselItem>
                  <TeacherCard
                    id={"1"}
                    first_title="ĐỘI NGŨ GIẢNG VIÊN"
                    second_title="Bạch Quang Hưng - 8.0 IELTS"
                    content="Một thầy giáo Gen Z và những giờ học đầy ắp tiếng cười, thầy Hưng luôn cố gắng tạo không khí vui vẻ trong lớp học. Vì giờ học luôn có không khí thoải mái nên các học viên rất dễ tiếp thu kiến thức. Đây là một trong những lý do học viên của thầy luôn đạt điểm cao trong các kì thi IELTS, TOEIC."
                    imageURL={teacher1.src}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="courses">
          <div className="max-w-5xl mx-auto pt-40 px-4 sm:px-0">
            <p className="text-5xl sm:text-3xl font-semibold text-center mb-16">
              Các
              <span className="text-[#E54981]"> Khóa Học </span>
              dành cho bạn
            </p>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <CourseCard
                    id={"1"}
                    first_title="IELTS 0 - 6.5+"
                    second_title="IELTS 0 - 6.5+"
                    content="Với lộ trình học được cá nhân hoá, MERRY vẽ ra con đường ngắn và thuận lợi nhất cho từng học viên để đến với mục tiêu của mình. Chúng tôi cam kết sẽ ngày một hoàn thiện và đưa ra nhiều hơn những phương pháp mang IELTS đến gần hơn với mỗi cá nhân, lấy chất lượng khoá học làm kim chỉ nam cho mỗi bước đi, quyết định."
                    imageURL={course1.src}
                  />
                </CarouselItem>

                <CarouselItem>
                  <CourseCard
                    id={"1"}
                    first_title="TOEIC 0 - 800"
                    second_title="TOEIC 0 - 800"
                    content="Học gì thi nấy, chúng tôi không đơn thuần chỉ đưa cho bạn những kĩ năng và kiến thức làm bài, MERRY là người trò chuyện để hiểu bạn hơn mỗi ngày, từ đó đưa ra thời gian biểu, cách thức học phù hợp. TOEIC không còn là nỗi lo lắng của những người đang ngày đêm ôn luyện mong muốn cải thiện ngoại ngữ của mình.
                    "
                    imageURL={course2.src}
                  />
                </CarouselItem>

                <CarouselItem>
                  <CourseCard
                    id={"1"}
                    first_title="KID ENGLISH"
                    second_title="KID ENGLISH"
                    content="Nắm bắt được tâm lý các bạn nhỏ, MERRY đã đưa ra rất nhiều những hoạt động, trò chơi thú vị để khiến giờ học trở thành khoảng thời gian thoải mái và lý tưởng để tiếp thu kiến thức."
                    imageURL={course3.src}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="missions">
          <div className="w-full bg-[#181B3E] mt-40 pt-10">
            <div className="max-w-6xl mx-auto py-24 px-8 sm:px-0">
              <p className="w-4/5 mx-auto text-white font-medium text-xl sm:text-3xl text-center">
                Cùng{" "}
                <span className="text-[#E54981] font-bold text-[36px] leading-none">
                  MERRY
                </span>{" "}
                kiến tạo tương lai Giáo dục Việt Nam rộng mở vì sự phát triển
                toàn diện của con người
              </p>
              <div className="mt-16 grid sm:grid-cols-3 gap-8 sm:gap-5">
                <div className="p-4 pb-6 bg-white rounded-2xl">
                  <div
                    style={{
                      // use the src property of the image object
                      backgroundImage: `url(${mission1.src})`,
                      // other styles
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "240px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                    }}
                  ></div>
                  <div className="mt-4 mx-2">
                    <p className="font-medium text-lg">
                      Tự động hoá vận hành và chăm sóc khách hàng
                    </p>
                    <p className="text-[#666666] tracking-[-4%] text-sm mt-2">
                      Merry tự hào áp dụng công nghệ tự động hóa trong vận hành
                      và chăm sóc khách hàng. Hệ thống quản lý thông minh của
                      chúng tôi giúp ghi danh, xếp lớp và theo dõi tiến trình
                      học tập nhanh chóng, chính xác. Với dịch vụ hỗ trợ tự động
                      24/7, học viên luôn nhận được sự tư vấn và giải đáp kịp
                      thời. Merry cam kết mang đến trải nghiệm học tập hiện đại,
                      thân thiện và hiệu quả.
                    </p>
                  </div>
                </div>

                <div className="p-4 pb-6 bg-white rounded-2xl">
                  <div
                    style={{
                      // use the src property of the image object
                      backgroundImage: `url(${mission2.src})`,
                      // other styles
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "240px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                    }}
                  ></div>
                  <div className="mt-6 mx-2">
                    <p className="font-medium text-lg">
                      Lớp học trực tuyến ONLINE
                    </p>
                    <p className="text-[#666666] tracking-[-4%] mt-6 text-sm">
                      Merry tự hào mang đến các lớp học trực tuyến hiện đại và
                      tiện lợi. Với công nghệ tiên tiến, học viên có thể học mọi
                      lúc, mọi nơi, cùng hệ thống quản lý thông minh giúp theo
                      dõi tiến trình học tập. Đội ngũ giảng viên giàu kinh
                      nghiệm và công cụ học tập tương tác đảm bảo nâng cao kỹ
                      năng tiếng Anh hiệu quả. Merry cam kết mang đến trải
                      nghiệm học tập trực tuyến chất lượng.
                    </p>
                  </div>
                </div>

                <div className="p-4 pb-6 bg-white rounded-2xl">
                  <div
                    style={{
                      // use the src property of the image object
                      backgroundImage: `url(${mission3.src})`,
                      // other styles
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "240px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                    }}
                  ></div>
                  <div className="mt-4 mx-2">
                    <p className="font-medium text-lg">
                      Chú trọng vào phát triển trí tuệ con người
                    </p>
                    <p className="text-[#666666] tracking-[-4%] text-sm mt-2">
                      Merry chú trọng phát triển trí tuệ con người, không chỉ
                      dạy ngôn ngữ mà còn rèn luyện tư duy phản biện, kỹ năng
                      giao tiếp và sáng tạo. Với đội ngũ giáo viên tận tâm và
                      phương pháp tiên tiến, Merry cam kết mang đến môi trường
                      học tập toàn diện, thúc đẩy sự phát triển của học viên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="story">
          <div className="max-w-5xl mx-auto pt-40 px-4 sm:px-0">
            <p className="text-3xl font-semibold mb-16 text-center sm:text-left">
              Câu chuyện học viên của chúng tôi
            </p>
            <div className="sm:flex justify-between items-center gap-16">
              <div className="max-w-[390px]">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <StoryCard
                        id={"1"}
                        first_title="Học viên Thuỳ Dung"
                        second_title="6.5 IELTS"
                        content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                        imageURL={student1.src}
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <StoryCard
                        id={"1"}
                        first_title="Học viên Lê Thương"
                        second_title="6.5 IELTS"
                        content="Giúp người học xây dựng tư duy đúng về việc học và xây dựng thói quen học tập tốt để họ có thể áp dụng vào tất cả lĩnh vực trong cuộc sống
                    thông qua trải nghiệm học Tiếng Anh."
                        imageURL={student2.src}
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <video
                className="rounded-xl mt-16 sm:mt-0"
                width="540"
                height="480"
                controls
                preload="auto"
                autoPlay
                loop
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <section id="email">
          <div className="max-w-6xl mx-auto my-32  bg-[#181B3E] p-16 text-center sm:rounded-3xl">
            <div className="sm:w-1/2 mx-auto">
              <p className="text-2xl sm:text-4xl font-semibold text-white">
                Đăng kí để nhận thông tin mới nhất từ
                <span className="text-[#E54981]"> MERRY</span>
              </p>
              <p className=" my-4 sm:my-8 text-sm text-white">
                Bạn sẽ nhận được thông tin mới nhất từ Merry
              </p>

              <div className="p-1 flex bg-white  w-full rounded-full">
                <Input type="email" id="email" placeholder="Nhập Email" />
                <Button variant="default" size="default">
                  Gửi
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="max-w-6xl mx-auto sm:mb-16">
        <Image
          src={signed.src}
          alt="image"
          height={30}
          width={200}
          className="ml-auto mr-4 my-8 sm:mr-0 sm:my-0"
        />
      </div>
      <div className="w-full text-sm text-center bg-[#D9D9D9]/40 h-10 flex items-center justify-center">
        Coppy Right 2024, All Rights Reserved
      </div>
    </div>
  );
}

export default Home;
