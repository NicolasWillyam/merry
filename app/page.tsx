import ContentCard from "@/components/content-card";
import HeadTitle from "@/components/head-title";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import card_image from "../public/card-image.png";
import course_image from "../public/course-image.png";
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

function Home() {
  return (
    <div>
      <HeadTitle />
      <Navbar />
      <section id="home">
        <div className="max-w-5xl mx-auto mt-16 text-center mb-32 px-4 sm:px-0">
          <p className="sm:leading-[72px] text-4xl sm:text-5xl font-semibold">
            Where happiness meet high scores
          </p>
          <p className="max-w-3xl mx-auto leading-[24px] text-base text-[#666666] font-regular px-4 mt-8 sm:mt-2">
            Sứ mệnh giúp người học xây dựng tư duy đúng về việc học và xây dựng
            thói quen học tập tốt thông qua trải nghiệm học Tiếng Anh và xây
            dựng cộng đồng những nhà giáo dục toàn diện.
          </p>
          <div className="w-fit flex items-center mx-auto mt-8 gap-8">
            <Button variant="default" size="default">
              Get Started
            </Button>
            <Link href={"https://youtu.be/CKuKRRFoVOg"}>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/play-icon.svg"}
                  alt="play-icon"
                  width={38}
                  height={38}
                />
                <p className="font-medium">Watch Videos</p>
              </div>
            </Link>
          </div>

          <div className="w-full grid grid-cols-4 mt-4">
            <Image
              className="mx-auto"
              src={"/image1.png"}
              alt="image"
              width={224}
              height={340}
            />
            <Image
              className="mt-20 mx-auto"
              src={"/image2.png"}
              alt="image"
              width={224}
              height={340}
            />
            <Image
              className="mt-20 mx-auto"
              src={"/image3.png"}
              alt="image"
              width={224}
              height={340}
            />
            <Image
              className="mx-auto"
              src={"/image4.png"}
              alt="image"
              width={224}
              height={340}
            />
          </div>
        </div>
      </section>

      <section id="gioi-thieu">
        <div className="max-w-5xl mx-auto mb-32 px-8 sm:px-0">
          <p className="text-3xl font-semibold text-center">
            Trải nghiệm <span className="text-[#E54981]">Ưu Việt </span>
            dành cho người học
          </p>
          <div className="grid grid-cols-1 gap-32 mt-32">
            <ContentCard
              id={"1"}
              first_title="Cam kết với học viên"
              second_title="Cam kết đầu ra - Cam kết khoá học "
              content="MERRY cam kết giúp học viên đạt chuẩn đầu ra bằng văn bản trước khi bát đầu khoá học.Theo đó, học viên cần cam kết tham gia đủ số buổi theo ộ trình và học tập theo hướng dẫn của giáo viên đảm nhiệm để đảm bảo quá trình học thực sự đem lại hiệu quả cho học viên."
              imageURL={card_image.src}
            />
            <ContentCard
              id={"0"}
              first_title="Không giới Hạn"
              second_title="Học bổ trợ miễn phí, không giới hạn"
              content="Học viên sẽ thực hiện kiểm tra đầu vào về năng lực sử dụng Tiêngs Anh, mục tiêu học tập và phong cách học tập giúp người học định hình rõ ràng hơn và có tâm thế sẵn sàng nhất trước khi bắt đầu hành trình đạt chuẩn đầu ra."
              imageURL={card_image.src}
            />
            <ContentCard
              id={"1"}
              first_title="Không giới  hạn"
              second_title="Phương pháp học tập khoa học và thú vị "
              content="Chương trình đào tạo được xây dựng dựa trên nền tảng hình thành thói quen tự học trong não bộ. Các phương pháp giảng dạy trong từng buổi học nhằm khơi dậy động lực ở học viên và toạ nhiều cơ hội để các em đạt được nhữn mục tiêu ngắn hạn trong khoá học."
              imageURL={card_image.src}
            />
            <ContentCard
              id={"0"}
              first_title="đội nghũ giảng dạy"
              second_title="Đội ngũ Giáo Viên yêu giảng dạy và truyền lửa đến Học Viên"
              content="Giáo Viên đạt chứng chỉ IELTS 8.0 và bằng cấp Nghiệp vụ Sư phạm, đều có trên 2 năm kinh nghiệm đào tạo Tiếng Anh"
              imageURL={card_image.src}
            />
          </div>
        </div>
      </section>

      <section id="khoa-hoc">
        <div className="max-w-5xl mx-auto mb-32 px-4 sm:px-0">
          <p className="text-2xl sm:text-3xl font-semibold text-center mb-16">
            Các
            <span className="text-[#E54981]"> Khóa Học </span>
            dành cho bạn
          </p>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <CourseCard
                  id={"1"}
                  first_title="IELTS 0 -6.5+"
                  second_title="Sứ mệnh của chúng tôi"
                  content="Giúp người học xây dựng tư duy đúng về việc học và xây dựng thói quen
                  học tập tốt để họ có thể áp dụng vào tất cả lĩnh vực trong cuộc sống
                  thông qua trải nghiệm học Tiếng Anh
                  
                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau phát triển trở thành phiên bản tốt nhất của mình."
                  imageURL={course_image.src}
                />
              </CarouselItem>

              <CarouselItem>
                <CourseCard
                  id={"1"}
                  first_title="IELTS 0 -6.5+"
                  second_title="Sứ mệnh của chúng tôi"
                  content="Giúp người học xây dựng tư duy đúng về việc học và xây dựng thói quen
                  học tập tốt để họ có thể áp dụng vào tất cả lĩnh vực trong cuộc sống
                  thông qua trải nghiệm học Tiếng Anh
                  
                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau phát triển trở thành phiên bản tốt nhất của mình."
                  imageURL={course_image.src}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="news">
        <div className="w-full bg-[#181B3E]">
          <div className="max-w-5xl mx-auto py-24 pb-32 px-8 sm:px-0">
            <p className="text-white font-medium text-xl sm:text-3xl text-center">
              Cùng MERRY kiến tạo tương lai Giáo dục Việt Nam rộng mở vì sự phát
              triển toàn diện của con người
            </p>
            <div className="mt-16 grid sm:grid-cols-3 gap-8 sm:gap-5">
              <div className="p-4 pb-6 bg-white rounded-2xl">
                <div
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${course_image.src})`,
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
                  <p className="font-medium text-lg">Sứ mệnh của chúng tôi</p>
                  <p className="text-[#666666] tracking-[-4%]">
                    Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình
                    của mỗi cá thể cùng nhau phát triển trở thành phiên bản tốt
                    nhất của mình.
                  </p>
                </div>
              </div>

              <div className="p-4 pb-6 bg-white rounded-2xl">
                <div
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${course_image.src})`,
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
                  <p className="font-medium text-lg">Sứ mệnh của chúng tôi</p>
                  <p className="text-[#666666] tracking-[-4%]">
                    Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình
                    của mỗi cá thể cùng nhau phát triển trở thành phiên bản tốt
                    nhất của mình.
                  </p>
                </div>
              </div>

              <div className="p-4 pb-6 bg-white rounded-2xl">
                <div
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${course_image.src})`,
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
                  <p className="font-medium text-lg">Sứ mệnh của chúng tôi</p>
                  <p className="text-[#666666] tracking-[-4%]">
                    Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình
                    của mỗi cá thể cùng nhau phát triển trở thành phiên bản tốt
                    nhất của mình.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="giang-vien">
        <div className="max-w-5xl mx-auto my-32 px-4 sm:px-0">
          <p className="text-3xl font-semibold mb-16 text-center sm:text-left">
            Đội ngũ giảng viên của chúng tôi
          </p>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <TeacherCard
                  id={"1"}
                  first_title="ĐỘI NGŨ GIẢNG VIÊN"
                  second_title="Bạch Quang Hưng - 8.0"
                  content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                  imageURL={card_image.src}
                />
              </CarouselItem>

              <CarouselItem>
                <TeacherCard
                  id={"1"}
                  first_title="IELTS 0 -6.5+"
                  second_title="Sứ mệnh của chúng tôi"
                  content="Giúp người học xây dựng tư duy đúng về việc học và xây dựng thói quen
                  học tập tốt để họ có thể áp dụng vào tất cả lĩnh vực trong cuộc sống
                  thông qua trải nghiệm học Tiếng Anh
                  
                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau phát triển trở thành phiên bản tốt nhất của mình."
                  imageURL={card_image.src}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="story">
        <div className="max-w-5xl mx-auto my-32 px-4 sm:px-0">
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
                      first_title="ĐỘI NGŨ GIẢNG VIÊN"
                      second_title="Bạch Quang Hưng - 8.0"
                      content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                      imageURL={card_image.src}
                    />
                  </CarouselItem>

                  <CarouselItem>
                    <StoryCard
                      id={"1"}
                      first_title="IELTS 0 -6.5+"
                      second_title="Sứ mệnh của chúng tôi"
                      content="Giúp người học xây dựng tư duy đúng về việc học và xây dựng thói quen học tập tốt để họ có thể áp dụng vào tất cả lĩnh vực trong cuộc sống
                    thông qua trải nghiệm học Tiếng Anh."
                      imageURL={card_image.src}
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
              preload="none"
            >
              <source src="/video.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section id="feedback">
        <div className="max-w-5xl mx-auto my-32 px-8 sm:px-0">
          <p className="text-3xl font-semibold mb-16 text-center sm:text-left">
            Học viên nói gì về các khóa học của chúng tôi
          </p>
          <div className="sm:flex gap-5">
            <div className="flex-cols sm:w-1/3">
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  "
                imageURL={card_image.src}
                time="26 March 2024"
              />
            </div>
            <div className="flex-cols w-1/3 hidden sm:block">
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />

              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Goood

                  "
                imageURL={card_image.src}
                time="26 March 2024"
              />
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />
            </div>
            <div className="flex-cols w-1/3 hidden sm:block">
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="Em thấy học từ động lực và mục tiêu là chân lý, và mình cần phải đóng vai trò là một người truyền động lực cho học viên

                  "
                imageURL={card_image.src}
                time="26 March 2024"
              />
              <FeedbackCard
                name="Vallentina Putri"
                role="Giảng viên trung tâm"
                content="

                  Xây dựng cộng đồng những nhà giáo dục toàn diện, là gia đình của mỗi
                  cá thể cùng nhau pháttriển trở thành phiên bản tốt nhất của mình."
                imageURL={card_image.src}
                time="26 March 2024"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="email">
        <div className="max-w-6xl mx-auto my-32  bg-[#181B3E] p-16 text-center sm:rounded-3xl">
          <div className="sm:w-1/2 mx-auto">
            <p className="text-2xl sm:text-4xl font-semibold text-white">
              Enter your email to get the latest news
            </p>
            <p className=" my-4 sm:my-8 text-sm text-white">
              You will get the latest notifications about the lastest news
            </p>

            <div className="p-1 flex bg-white  w-full rounded-full">
              <Input
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
              <Button variant="default" size="default">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="w-full text-sm text-center bg-[#D9D9D9]/40 h-10 flex items-center justify-center">
        Coppy Right 2024, All Rights Reserved
      </div>
    </div>
  );
}

export default Home;
