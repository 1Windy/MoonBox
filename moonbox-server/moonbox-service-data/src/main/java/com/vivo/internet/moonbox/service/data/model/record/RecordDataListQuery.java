/*
Copyright 2022 vivo Communication Technology Co., Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
package com.vivo.internet.moonbox.service.data.model.record;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * RecordDataListQuery - {@link RecordDataListQuery}
 *
 * @author yanjiang.liu
 * @version 1.0
 * @since 2022/8/22 11:18
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecordDataListQuery implements Serializable {

    private static final long serialVersionUID = -6342107355178356164L;

    /**
     * 录制任务id
     */
    private String recordTaskRunId;

    /**
     * 录制接口uri
     */
    private String recordUri;

    /**
     * traceId
     */
    private String traceId;

    /**
     * 采集时间段-开始时间
     */
    private String startTime;

    /**
     * 采集时间段-结束时间
     */
    private String endTime;
}
