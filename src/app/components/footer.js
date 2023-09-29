import {ImFacebook,ImInstagram,ImLinkedin} from "react-icons/im"

import Newsletter from "./_child/newsletter"

export default function footer() {
  return (
    <footer className="bg-gray-50">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
          <a><ImFacebook color="#888888" /></a>
          <a><ImInstagram color="#888888" /></a>
          <a><ImLinkedin color="#888888" /></a>

          </div>
          <p className="py-5 text-gray-400">Copyright all sights are reversed | this tamplate is made for daily tutorial</p>
          <p className="text-gray-400 text-center">Terms and Conditions</p>

        </div>

      </div>

    </footer>
  )
}
