import * as React from 'react';
import { FaRegClone } from 'react-icons/fa';
import StrategicProps from './children/strategic';
import usePreventBodyScroll from '@/components/hooks/usePreventBodyScroll';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

interface PropTypes {
  data: any;
}

const DataPokinOPD = ({ data }: PropTypes) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div className='dark:bg-meta-4 dark:text-white bg-white'>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

      <ScrollMenu
        onWheel={onWheel}
      >
        <div className='container-wrapp bg-white flex-col items-center justify-center relative'>
          <div data-te-infinite-scroll-init
            data-te-infinite-direction="x"
            className="tree bg-white min-w-[1000em] items-center justify-center overflow-x-scroll"
          >
            <ul>
              <li>
                <div className='tree-child bg-white flex w-[30em] flex-col gap-4 border border-black'>
                  <div className='border border-black w-full'>
                    <div className='text-black font-medium text-medium'>POHON KINERJA OPD</div> <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                      <div><FaRegClone size={16} /></div>
                      <div>CLONE</div>
                    </button>
                  </div>
                  <table className='mt-6 w-full'>
                    <tbody className='text-title-ss text-black'>
                      <tr className='flex'>
                        <td className='w-[30%] border border-light-gray py-2'>NAMA OPD</td>
                        <td className='w-[70%] border border-light-gray py-2'>{data.data.nama_opd}</td>
                      </tr>
                      <tr className='flex'>
                        <td className='w-[30%] border border-light-gray py-2'>TAHUN</td>
                        <td className='w-[70%] border border-light-gray py-2'>{data.data.tahun}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul>
                  {data?.strategic?.map((el: any, index: number) => (
                    <StrategicProps data={data} strategic={el} key={index} />
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </ScrollMenu>
    </div>
  )
}

export default DataPokinOPD;