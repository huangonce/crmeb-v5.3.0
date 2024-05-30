<?php
/**
 *  +----------------------------------------------------------------------
 *  | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
 *  +----------------------------------------------------------------------
 *  | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
 *  +----------------------------------------------------------------------
 *  | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
 *  +----------------------------------------------------------------------
 *  | Author: CRMEB Team <admin@crmeb.com>
 *  +----------------------------------------------------------------------
 */

namespace app\dao\system;


use app\dao\BaseDao;
use app\model\system\SystemCrudData;

/**
 * Class SystemCrudDataDao
 * @author 等风来
 * @email 136327134@qq.com
 * @date 2023/7/28
 * @package app\dao\system
 */
class SystemCrudDataDao extends BaseDao
{

    /**
     * @return string
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/7/28
     */
    protected function setModel(): string
    {
        return SystemCrudData::class;
    }
}
